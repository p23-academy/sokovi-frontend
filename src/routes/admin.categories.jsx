import {createFileRoute} from '@tanstack/react-router'
import CategoriesScreen from "../ui/admin/categories/CategoriesScreen.jsx";
import {getAllCategories} from "../data/categories/categoriesRepo.js";

export const Route = createFileRoute('/admin/categories')({
  loader: async ({context: {queryClient}}) => {
    const categories = await getAllCategories()
    queryClient.setQueryData(['categories'], categories)
  },
  component: CategoriesScreen
})