import {useState} from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const FormPasswordInput = ({name, label}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={"flex flex-col"}>
      <div className={"flex items-center justify-between"}>
        <label
          className={"text-lg font-medium mb-1 text-white"}
          htmlFor={name}
        >
          {label}
        </label>
        <button type={"button"} className={""} onClick={() => setShowPassword(!showPassword)}>
          {showPassword ?
            <VisibilityOffIcon className={"text-white"}/>
            :
            <VisibilityIcon className={"text-white"}/>
          }
        </button>
      </div>
      <input
        className={"px-2 py-1 text-lg rounded"}
        name={name}
        type={showPassword ? "text" : "password"}
      />
    </div>
  )
}

export default FormPasswordInput;