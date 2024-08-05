import {createFileRoute, redirect} from '@tanstack/react-router'
import {useQuery} from "@tanstack/react-query";
import {verifyToken} from "../data/auth/authRepo.js";
import AdminLayout from "../ui/admin/AdminLayout.jsx";

export const Route = createFileRoute('/admin')({
  component: AdminApp,
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

function AdminApp() {
  const {data: user} = useQuery({queryKey: ['user']})

  return (
    <AdminLayout/>
  )
}