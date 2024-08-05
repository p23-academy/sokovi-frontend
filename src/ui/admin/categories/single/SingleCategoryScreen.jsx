import {Route} from "../../../../routes/admin.categories_.$categoryId.jsx";
import {useState} from "react";
import {useNavigate} from "@tanstack/react-router";
import {useMutation} from "@tanstack/react-query";
import Form from "../../../../components/forms/Form.jsx";
import FormTextInput from "../../../../components/forms/FormTextInput.jsx";
import Button from "../../../../components/buttons/Button.jsx";
import {createCategory} from "../../../../data/categories/categoriesRepo.js";
import {handleCategoryError} from "../../../../data/errors/errorHandler.js";

const SingleCategoryScreen = () => {
  const {categoryId} = Route.useParams()

  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: (event) => {
      event.preventDefault()
      const formData = new FormData(event.target)
      const name = formData.get("name")
      return createCategory(name)
    },
    onSuccess: (data) => {
      navigate({to: "/admin/categories"})
    },
    onError: error => {
      console.log(error)
      setError(error.response.data)
    }
  })

  return (
    <div className={"flex-grow h-full flex flex-col p-4"}>
      <h1 className={"text-2xl font-bold mb-2"}>{categoryId !== "new" ? "Minjaj kategoriju" : "Nova kategorija"}</h1>
      <Form className={"max-w-80"} onSubmit={mutation.mutate}>
        <FormTextInput name={"name"} label={"Naziv"} required={true}/>
        {error && <em className={"text-red-600"}>{handleCategoryError(error)}</em>}
        <Button className={"mt-2"} type="submit">Snimi</Button>
      </Form>
    </div>
  )
}

export default SingleCategoryScreen