import {createLazyFileRoute} from '@tanstack/react-router'
import {useQuery} from "@tanstack/react-query";

export const Route = createLazyFileRoute('/app/profile')({
  component: AppProfile,
})

function AppProfile() {
  const {data: user} = useQuery({queryKey: ['user']})

  return (
    <div>
      <h1>Profile</h1>
      {user.email}
    </div>
  )
}