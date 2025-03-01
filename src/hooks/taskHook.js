import axios from "axios";

const API_URL = "http://localhost:3000/tasks";

export const addTask = async (task) => {
    const response = await axios.post(`${API_URL}/addTask`, task)
    return response.data;
}

export const updateTask = async (id,updatedTask) => {
    const response = await axios.put(`${API_URL}/updateTask/${id}`,updatedTask)
    return response.data;
}

export const deleteTask = async (id) => {
    try {
    const response = await axios.delete(`${API_URL}/deleteTask/${id}`)
    return response.data;}
    catch (error) {
        console.error("Failed to delete task");
    }
}

export const getAllTasks = async () => {
    const response =await axios.get(`${API_URL}/getAllTasks`)
    return response.data;
}