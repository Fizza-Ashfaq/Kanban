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
    const res=await addTask(TaskData)
    setData((prevData) => [...(prevData || []), TaskData]);
    
      if(res.status == 201)
      {
      toast.success("Task added successfully");
      setTimeout(() => {
        navigate("/Home");
      }, 1000);
    }
    else{
      toast.error("Failed to add task");
    }
  };

  const update = async(updatedTask) => {
    const res= await updateTask(updatedTask._id, updatedTask);
    setData(prevData=>prevData.map(task => task.TaskName === updatedTask.TaskName ? updatedTask : task));

    if(res.status == 200)
    {
    toast.success("Task updated successfully!");
    setTimeout(() => {
      navigate("/Home");
    }, 1000);
  }
  else{
    toast.error("Failed to update task");
  }
};

const deleted = (task) => {
    const res= deleteTask(task._id);
    setData(prevData=>prevData.filter(taskk => taskk._id !== task._id));
    if(res.status == 200)
      {
      toast.success("Task Deleted successfully!");
    }
    else{
      toast.error("Failed to Delete task");
    }
};


  return (
    <TaskDataContext.Provider value={{ fetchData, addNewTask, update,deleted }}>
      {children}
    </TaskDataContext.Provider>
  );
};

export default TaskDataProvider;
