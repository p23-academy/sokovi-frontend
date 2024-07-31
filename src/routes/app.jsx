import {createFileRoute, redirect} from '@tanstack/react-router'
import {useQuery} from "@tanstack/react-query";
import {verifyToken} from "../data/auth/authRepo.js";
import {queryClient} from "../main.jsx";

export const Route = createFileRoute('/app')({
  component: App,
  beforeLoad: async () => {
    const token = localStorage.getItem("token")
    if (!token) {
      throw redirect({
        to: "/login"
      })
    }
    try {
      const data = await verifyToken(token)
      // queryClient.setQueryData(['user'], data.user)
    } catch (error) {
      localStorage.removeItem("token")
      throw redirect({
        to: "/login"
      })
    }
  }
})

function App() {
  const {data: user} = useQuery({queryKey: ['cart']})

  return (
    <div>
      {user.email}
    </div>
  )
}