import axios from 'axios';

const API_URL = 'http://localhost:3000/logger';
export const logger=async()=>{
    const response = await axios.get(`${API_URL}/loggerInfo`);
    return response.data;
}