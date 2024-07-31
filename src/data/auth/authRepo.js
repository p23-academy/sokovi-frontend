import axios from "axios";

export const registerUser = async (email, password) => {
  const response = await axios({
    url: 'http://localhost:3000/api/v1/register',
    method: 'post',
    data: {
      email: email,
      password: password,
    },
  })
  return response.data
}

export const loginUser = async (email, password) => {
  const response = await axios({
    url: 'http://localhost:3000/api/v1/login',
    method: 'post',
    data: {
      email: email,
      password: password,
    },
  })
  return response.data
}

export const verifyToken = async (token) => {
  const response = await axios({
    url: 'http://localhost:3000/api/v1/verify',
    method: 'post',
    data: {
      token: token,
    },
  })
  return response.data
}