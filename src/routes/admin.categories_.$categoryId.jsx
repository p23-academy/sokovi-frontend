import {createFileRoute} from '@tanstack/react-router'
import SingleCategoryScreen from "../ui/admin/categories/single/SingleCategoryScreen.jsx";

export const Route = createFileRoute('/admin/categories/$categoryId')({
  loader: ({params}) => {
    const categoryId = params.categoryId
  },
  component: SingleCategoryScreen,
})