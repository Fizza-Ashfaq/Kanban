import React, { useState, useEffect } from 'react';

export const TaskDataContext = React.createContext();

const TaskDataProvider = ({ children }) => {

    const getAllTask=() => {
        try {
            const allTasks = localStorage.getItem('tasks');
            return allTasks ? JSON.parse(allTasks) : [];
        } catch (error) {
            console.error("Error parsing localStorage tasks:", error);
            return []; 
        }
    }
  const [data, setData] = useState(()=>getAllTask());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchData=()=>{
        localStorage.setItem('tasks', JSON.stringify(data));
    }
    fetchData();
  }, [data]);

 
  const addNewTask = (TaskData) => {
    try{
    setData((prevData) => [...(prevData || []), TaskData]);
    }catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
  };

  const updateTask = (updatedTask) => {
    setData(prevData=>prevData.map(task => task.TaskName === updatedTask.TaskName ? updatedTask : task));
};

const deleteTask = (taskName) => {
    setData(prevData=>prevData.filter(task => task.TaskName !== taskName));
};


  return (
    <TaskDataContext.Provider value={{ tasks:data, addNewTask, updateTask,deleteTask,loading, error }}>
      {children}
    </TaskDataContext.Provider>
  );
};

export default TaskDataProvider;
