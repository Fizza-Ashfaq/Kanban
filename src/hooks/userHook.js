import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

export const loginUser = async (data) => {
    const response =await axios.post(`${API_URL}/login`,data);
    return response.data;
}

export const signUpUser = async (data) => {
    const response =await axios.post(`${API_URL}/signUp`,data);
    return response.data;
}
