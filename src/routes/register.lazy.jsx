import {createLazyFileRoute, Link} from '@tanstack/react-router'
import LoginForm from "../ui/auth/LoginForm.jsx";
import RegisterForm from "../ui/auth/RegisterForm.jsx";

export const Route = createLazyFileRoute('/register')({
  component: Register,
})

function Register() {
  return (
    <div className={"h-screen w-screen bg-white flex"}>
      <div className={"hidden md:flex h-full w-full flex-col justify-center p-8"}>
        <h1 className={"text-6xl font-bold mb-8"}>Registracija</h1>
        <h1 className={"text-2xl font-light"}>Podrum pića</h1>
        <h1 className={"text-4xl font-normal"}>Za mladića</h1>
      </div>
      <div className={"h-full w-full md:w-96 bg-blue-800 flex flex-col justify-center items-center"}>
        <h1 className={"block md:hidden text-white text-4xl font-bold mb-8"}>Registracija</h1>
        <RegisterForm/>
        <Link to="/login" className="mt-2 text-white">
          Prijava
        </Link>
      </div>
    </div>
  )
}