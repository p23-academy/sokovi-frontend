const ButtonMenu = ({className, icon, children, onClick}) => {
  return (
    <button
      className={`h-32 w-32 px-2 py-1 flex flex-col items-center justify-center text-xl font-bold bg-blue-600 text-white rounded ${className}`}
      onClick={onClick}
      type={"button"}
    >
      {icon}
      {children}
    </button>
  )
}

export default ButtonMenu