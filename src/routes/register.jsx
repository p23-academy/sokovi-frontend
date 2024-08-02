import {createFileRoute, Link, redirect} from '@tanstack/react-router'
import RegisterForm from "../ui/auth/RegisterForm.jsx";
import {verifyToken} from "../data/auth/authRepo.js";

export const Route = createFileRoute('/register')({
  component: Register,
  loader: async ({context: {queryClient}}) => {
    try {
      const token = localStorage.getItem("token")
      const data = await verifyToken(token)
      queryClient.setQueryData(['user'], data.user)
      return redirect({
        to: "/app"
      })
    } catch (error) {
      localStorage.removeItem("token")
    }
  }
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