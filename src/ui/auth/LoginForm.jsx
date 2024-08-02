import FormTextInput from "../../components/forms/FormTextInput.jsx";
import Form from "../../components/forms/Form.jsx";
import ButtonWhite from "../../components/buttons/ButtonWhite.jsx";
import FormPasswordInput from "../../components/forms/FormPasswordInput.jsx";
import {loginUser} from "../../data/auth/authRepo.js";
import {useNavigate} from "@tanstack/react-router";
import {handleAuthError} from "../../data/errors/errorHandler.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useState} from "react";

const LoginForm = () => {
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (event) => {
      event.preventDefault()
      const formData = new FormData(event.target)
      const email = formData.get("email")
      const password = formData.get("password")
      return loginUser(email, password)
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token)
      queryClient.setQueryData(['user'], data.user)
      navigate({to: "/app"})
    },
    onError: error => {
      console.log(error)
      setError(error.response.data)
    }
  })

  return (
    <Form className={"w-3/4"} onSubmit={mutation.mutate}>
      <FormTextInput name={"email"} label={"Email"} type={"email"}/>
      <FormPasswordInput name={"password"} label={"Šifra"}/>
      {error && <em className={"text-red-300"}>{handleAuthError(error)}</em>}
      <ButtonWhite className={"mt-2"} type="submit">Prijavi se</ButtonWhite>
    </Form>
  )
}

export default LoginForm