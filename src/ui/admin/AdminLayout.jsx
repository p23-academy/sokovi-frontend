import {Outlet} from "@tanstack/react-router";
import AdminTopbar from "./AdminTopbar.jsx";
import AdminSidebar from "./AdminSidebar.jsx";

const AdminLayout = () => {
  return (
    <div className={"h-screen w-screen flex flex-col"}>
      <AdminTopbar/>
      <div className={"h-full w-screen flex"}>
        <AdminSidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout