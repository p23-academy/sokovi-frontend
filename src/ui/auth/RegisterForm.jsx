import {useForm} from "@tanstack/react-form";
import FormTextInput from "../../components/forms/FormTextInput.jsx";
import Form from "../../components/forms/Form.jsx";
import ButtonWhite from "../../components/buttons/ButtonWhite.jsx";
import FormPasswordInput from "../../components/forms/FormPasswordInput.jsx";

const RegisterForm = () => {
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
    },
  })

  return (
    <Form form={form}>
      <FormTextInput form={form} name={"email"} label={"Email"} type={"email"}/>
      <FormPasswordInput form={form} name={"password"} label={"Šifra"}/>
      <ButtonWhite className={"mt-2"} type="submit">Registriraj se</ButtonWhite>
    </Form>
  )
}

export default RegisterForm