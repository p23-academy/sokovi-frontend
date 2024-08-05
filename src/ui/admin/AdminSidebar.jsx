import {useNavigate} from "@tanstack/react-router";
import ButtonMenu from "../../components/buttons/ButtonMenu.jsx";
import ClassIcon from '@mui/icons-material/Class';
import LiquorIcon from '@mui/icons-material/Liquor';

const AdminSidebar = () => {
  const navigate = useNavigate()

  return (
    <div className={"h-full w-40 p-2 flex flex-col gap-2 items-center bg-blue-200"}>
      <ButtonMenu
        className={"!w-full"}
        onClick={() => navigate({to: "/admin/categories"})}
        icon={<ClassIcon className={"!size-10"}/>}
      >
        Kategorije
      </ButtonMenu>
      <ButtonMenu
        className={"!w-full"}
        onClick={() => navigate({to: "/admin/items"})}
        icon={<LiquorIcon className={"!size-10"}/>}
      >
        Artikli
      </ButtonMenu>
    </div>
  )
}

export default AdminSidebar;