import Button from "./Button.jsx";

const ButtonWhite = ({className, children, type, onClick}) => {
  return (
    <Button
      className={`!bg-white !text-blue-800 ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  )
}

export default ButtonWhite