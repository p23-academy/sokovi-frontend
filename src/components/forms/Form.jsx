const Form = ({className, form, children}) => {
  return (
    <form
      className={`flex flex-col gap-2 ${className}`}
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      {children}
    </form>
  )
}

export default Form