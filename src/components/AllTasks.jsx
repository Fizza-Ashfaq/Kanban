import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import TaskCard from "./TaskCard";
import { TaskDataContext } from './TaskDataProvider';

function AllTasks() {
  const { fetchData, update,deleted} = useContext(TaskDataContext);  
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const [draggedTask, setDraggedTask] = useState(null);

  useEffect(() => {
    const onrender = async () => {
      try {
        const tasksData = await fetchData();
        setTasks(tasksData || []); 
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setTasks([]); 
      }
    };
    onrender();
  }, []);

  const ToDoTasks = tasks.filter((task) => task.TaskStatus === "To Do");
  const InProgressTasks = tasks.filter(
    (task) => task.TaskStatus === "In Progress"
  );
  const CompletedTasks = tasks.filter(
    (task) => task.TaskStatus === "Completed"
  );

  const onEdit = (task) => {
    navigate("/Edit", { state: { task } });
  };

  const onDelete = async(task) => {
    console.log(task);
    await deleted(task);
    setTasks(prevTasks => prevTasks.filter(t => t._id !== task._id));
  };

  const handleDragStart = (task) => {
    setDraggedTask(task);
    console.log("Dragging task:", task);
  };


  const handleDrop = async(event, targetStatus) => {
    
    event.preventDefault();
    if (!draggedTask) {
      console.log("No task is being dragged!");
      return;
    }

    console.log("Dropped task", draggedTask);

    const dropTarget = event.target.closest(".dropZone");
    const TaskElements = Array.from(dropTarget.querySelectorAll(".taskCard"));

    const dropIndex = TaskElements.indexOf(dropTarget);
    console.log(dropIndex);
    const allTasks = [...tasks];
    const draggedIndex = allTasks.findIndex((task) => task === draggedTask);

    if (draggedIndex === -1) return;

    const updatedTask = { ...draggedTask, TaskStatus: targetStatus };
    allTasks.splice(draggedIndex, 1);
    allTasks.splice(dropIndex, 0, draggedTask);

    await update(updatedTask);
    setTasks((prevTasks)=>
      prevTasks.map((task)=>task._id===updatedTask._id ? updatedTask:task));
    setDraggedTask(null);

  };

  return (
    <div className="flex justify-center w-full p-6">
      <div
        id="ToDodropZone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(event) => handleDrop(event, "To Do")}
        className="dropZone w-full bg-gray-100 p-6 m-5 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold text-sky-800 text-center">
          To Do
        </h2>
        {ToDoTasks.map((task, index) => (
          <TaskCard
            className="taskCard gap-5"
            draggable
            onDragStart={() => handleDragStart(task)}
            key={index}
            task={task}
            onEdit={() =>onEdit(task)}
            onDelete={() =>onDelete(task)}
          />
        ))}
      </div>

      <div
        id="InPdropZone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(event) => handleDrop(event, "In Progress")}
        className="dropZone w-full bg-yellow-100 p-6 m-5 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold text-sky-800 text-center">
          In Progress
        </h2>
        {InProgressTasks.map((task, index) => (
          <TaskCard
            className="taskCard gap-5"
            draggable
            onDragStart={() => handleDragStart(task)}
            key={index}
            task={task}
            onEdit={() =>onEdit(task)}
            onDelete={() =>onDelete(task)}
          />
        ))}
      </div>

      <div
        id="CompdropZone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(event) => handleDrop(event, "Completed")}
        className=" dropZone w-full bg-green-100 p-6 m-5 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold text-sky-800 text-center">
          Completed
        </h2>
        {CompletedTasks.map((task, index) => (
          <TaskCard
            className="taskCard gap-5"
            draggable
            onDragStart={() => handleDragStart(task)}
            key={index}
            task={task}
            onEdit={() =>onEdit(task)}
            onDelete={() =>onDelete(task)}
          />
        ))}
      </div>
    </div>
  );
}

export default AllTasks;
