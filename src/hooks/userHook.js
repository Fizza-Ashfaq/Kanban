import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

export const loginUser = async (data) => {
    const response =await axios.post(`${API_URL}/login`,data, { 
        withCredentials: true });
    return response;
}

export const signUpUser = async (data) => {
    const response =await axios.post(`${API_URL}/signUp`,data, { 
        withCredentials: true });
    return response;
}
