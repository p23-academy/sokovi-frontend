import {createFileRoute, Link, Outlet, redirect} from '@tanstack/react-router'
import {useQuery} from "@tanstack/react-query";
import {verifyToken} from "../data/auth/authRepo.js";

export const Route = createFileRoute('/admin')({
  component: App,
  loader: async ({context: {queryClient}}) => {
    const token = localStorage.getItem("token")
    if (!token) {
      throw redirect({
        to: "/login"
      })
    }
    try {
      const data = await verifyToken(token)
      const user = data.user
      if (user.role !== "admin") {
        return redirect({
          to: "/app"
        })
      }
      queryClient.setQueryData(['user'], user)
    } catch (error) {
      localStorage.removeItem("token")
      throw redirect({
        to: "/login"
      })
    }
  }
})

function App() {
  const {data: user} = useQuery({queryKey: ['user']})

  return (
    <div>
      <p>Navigacija <Link to={"/app/profile"}>Profile</Link></p>
      <p>logovani user: {user.id}</p>
      <Outlet/>
    </div>
  )
}