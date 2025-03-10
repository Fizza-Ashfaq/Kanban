import axios from "axios";

const API_URL = "http://localhost:3000/users";

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data, {
      withCredentials: true,
    });
    console.log(response.data);
    return response;
  } catch (error) {
    return error.response.data.message;
  }
};

export const signUpUser = async (data) => {
  const response = await axios.post(`${API_URL}/signUp`, data, {
    withCredentials: true,
  });
  return response;
};

export const logout = async () => {
  try {
    const response = await axios.get(`${API_URL}/logout`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    debugger
    return error;
  }
};
