import axios from "axios";

const API_URL = "http://localhost:3000/tasks";

export const addTask = async (task) => {
    const response = await axios.post(`${API_URL}/add`, task,{ withCredentials: true })
    return response;
}

export const updateTask = async (id,updatedTask) => {
    const response = await axios.put(`${API_URL}/update/${id}`,updatedTask,{ withCredentials: true })
    return response;
}

export const deleteTask = async (id) => {
    // try {
    const response = await axios.delete(`${API_URL}/delete/${id}`,{ withCredentials: true })
    return response;
    // catch (error) {
    //     console.log("Failed to delete task");
    // }
}

export const getAllTasks = async () => {
    const response =await axios.get(`${API_URL}/getAll`,{ withCredentials: true })
    return response.data;
}