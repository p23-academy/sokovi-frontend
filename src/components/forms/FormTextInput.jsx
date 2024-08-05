const FormTextInput = ({name, label, type, required, dark}) => {
  return (
    <div className={"flex flex-col"}>
      <label
        className={`text-lg font-medium mb-1 ${dark ? "text-white" : "text-black"}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={`px-2 py-1 text-lg rounded border-2 ${dark ? "border-white" : "border-black"}`}
        name={name}
        type={type || "text"}
        required={required}
      />
    </div>
  )
}

export default FormTextInput;