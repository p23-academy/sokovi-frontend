const AdminTopbar = () => {
  return (
    <div className={"h-12 w-screen px-4 grid grid-cols-3 items-center bg-blue-800 !text-white text-xl"}>
      <div>
        Sokovi
      </div>
      <div className={"justify-self-center"}>
        Sahat
      </div>
      <div className={"justify-self-end"}>
        Logout
      </div>
    </div>
  )
}

export default AdminTopbar;