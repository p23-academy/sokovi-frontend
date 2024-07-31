import {useForm} from "@tanstack/react-form";
import FormTextInput from "../../components/forms/FormTextInput.jsx";
import Form from "../../components/forms/Form.jsx";
import ButtonWhite from "../../components/buttons/ButtonWhite.jsx";
import FormPasswordInput from "../../components/forms/FormPasswordInput.jsx";
import {loginUser} from "../../data/auth/authRepo.js";
import {useNavigate} from "@tanstack/react-router";
import {useState} from "react";
import {handleAuthError} from "../../data/errors/errorHandler.js";

const LoginForm = () => {
  const navigate = useNavigate()

  const [error, setError] = useState(null)

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({value}) => {
      const email = value.email
      const password = value.password
      const loginResponse = await loginUser(email, password)
      if (loginResponse.status === 200) {
        return navigate({to: "/app"})
      } else {
        return setError(loginResponse.data)
      }
    },
  })

  return (
    <Form className={"w-3/4"} form={form}>
      <FormTextInput form={form} name={"email"} label={"Email"} type={"email"}/>
      <FormPasswordInput form={form} name={"password"} label={"Šifra"}/>
      {error && <em className={"text-red-300"}>{handleAuthError(error)}</em>}
      <ButtonWhite className={"mt-2"} type="submit">Prijavi se</ButtonWhite>
    </Form>
  )
}

export default LoginForm