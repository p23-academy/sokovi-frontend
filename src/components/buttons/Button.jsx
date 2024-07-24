const Button = ({className, children, type, onClick}) => {
  return (
    <button
      className={`px-2 py-1 text-xl font-bold bg-blue-600 text-white rounded ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  )
}

export default Button