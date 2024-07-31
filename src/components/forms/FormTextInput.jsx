const FormTextInput = ({name, label, type}) => {
  return (
    <div className={"flex flex-col"}>
      <label
        className={"text-lg font-medium mb-1 text-white"}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={"px-2 py-1 text-lg rounded"}
        name={name}
        type={type || "text"}
      />
    </div>
  )
}

export default FormTextInput;