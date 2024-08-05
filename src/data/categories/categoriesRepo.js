import axios from "axios";

export const createCategory = async (name) => {
  const response = await axios({
    url: 'http://localhost:3000/api/v1/categories',
    method: 'post',
    data: {
      name: name,
    },
  })
  return response.data
}

export const getAllCategories = async () => {
  const response = await axios({
    url: 'http://localhost:3000/api/v1/categories',
    method: 'get',
  })
  return response.data
}
