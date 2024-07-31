const Form = ({className, onSubmit, children}) => {
  return (
    <form
      className={`flex flex-col gap-2 ${className}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

export default Form