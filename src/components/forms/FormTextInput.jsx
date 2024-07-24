const FormTextInput = ({form, name, label, type}) => {
  return (
    <form.Field
      name={name}
      children={(field) => (
        <div className={"flex flex-col"}>
          <label
            className={"text-lg font-medium mb-1 text-white"}
            htmlFor={name}
          >
            {label}
          </label>
          <input
            className={"px-2 py-1 text-lg rounded"}
            name={field.name}
            type={type || "text"}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        </div>
      )}
    />
  )
}

export default FormTextInput;