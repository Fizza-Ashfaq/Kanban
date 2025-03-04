import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTask,updateTask, deleteTask, getAllTasks } from "../hooks/taskHook";
import toast from 'react-hot-toast';
export const TaskDataContext = React.createContext();

const TaskDataProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
 

    const fetchData=async()=>{
        const data=await getAllTasks();
        setData(data);
        return data;
    }
   
 
  const addNewTask = async(TaskData) => {
    console.log(TaskData);
    await addTask(TaskData)
    setData((prevData) => [...(prevData || []), TaskData]);
    
      if(res.success)
      {
      toast.success("Task added successfully");
      setTimeout(() => {
        navigate("/HomePage");
      }, 1000);
    }
    else{
      toast.error("Failed to add task");
    }
  };

  const update = async(updatedTask) => {
    const data = await updateTask(updatedTask._id, updatedTask);
    setData(prevData=>prevData.map(task => task.TaskName === updatedTask.TaskName ? updatedTask : task));

    if(res.success)
    {
    toast.success("Task updated successfully!");
    setTimeout(() => {
      navigate("/HomePage");
    }, 1000);
  }
  else{
    toast.error("Failed to update task");
  }
};

const deleted = (task) => {
    deleteTask(task._id);
    setData(prevData=>prevData.filter(taskk => taskk._id !== task._id));
};


  return (
    <TaskDataContext.Provider value={{ fetchData, addNewTask, update,deleted }}>
      {children}
    </TaskDataContext.Provider>
  );
};

export default TaskDataProvider;
