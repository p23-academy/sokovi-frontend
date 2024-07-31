import {useForm} from "@tanstack/react-form";
import FormTextInput from "../../components/forms/FormTextInput.jsx";
import Form from "../../components/forms/Form.jsx";
import ButtonWhite from "../../components/buttons/ButtonWhite.jsx";
import FormPasswordInput from "../../components/forms/FormPasswordInput.jsx";
import {registerUser} from "../../data/auth/authRepo.js";
import {handleAuthError} from "../../data/errors/errorHandler.js";
import {useNavigate} from "@tanstack/react-router";
import {useState} from "react";

const RegisterForm = () => {
  const navigate = useNavigate()

  const [error, setError] = useState(null)

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({value}) => {
      // Do something with form data
      console.log(value)
      const email = value.email
      const password = value.password
      const registerResponse = await registerUser(email, password)
      if (registerResponse.status === 200) {
        return navigate({to: "/app"})
      } else {
        return setError(registerResponse.data)
      }
    },
  })

  return (
    <Form className={"w-3/4"} form={form}>
      <FormTextInput form={form} name={"email"} label={"Email"} type={"email"}/>
      <FormPasswordInput form={form} name={"password"} label={"Šifra"}/>
      {error && <em className={"text-red-300"}>{handleAuthError(error)}</em>}
      <ButtonWhite className={"mt-2"} type="submit">Registriraj se</ButtonWhite>
    </Form>
  )
}

export default RegisterForm