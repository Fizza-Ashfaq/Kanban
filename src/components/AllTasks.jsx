
import React, { useContext, useState } from "react";
import { TaskDataContext } from "./TaskDataProvider";
import { useNavigate } from "react-router-dom";
import TaskCard from "./TaskCard";

function AllTasks() {
  const { tasks, deleteTask, updateTask } = useContext(TaskDataContext);
  const navigate = useNavigate();
  const [draggedTask, setDraggedTask] = useState(null);

  
  const ToDoTasks = tasks.filter((task) => task.TaskStatus === "To Do");
  const InProgressTasks = tasks.filter((task) => task.TaskStatus === "In Progress");
  const CompletedTasks = tasks.filter((task) => task.TaskStatus === "Completed");

  const onEdit = (task) => {
    navigate("/EditPage", { state: { task } });
  };

  const onDelete = (taskName) => {
    deleteTask(taskName);
  };

  const handleDragStart = (task) => {
    setDraggedTask(task);
    console.log("Dragging task:", task);
  };

  const handleDrop = (event,targetStatus) => {
    event.preventDefault();
    if(!draggedTask) {
      console.log("No task is being dragged!");
      return;}

      console.log("Dropped task", draggedTask);

      const dropTarget =event.target.closest(".dropZone");
      const TaskElements=Array.from(dropTarget.querySelectorAll(".taskCard"));

      const dropIndex=TaskElements.indexOf(dropTarget);
      console.log(dropIndex);
      const allTasks = [...tasks];
      const draggedIndex = allTasks.findIndex((task) => task === draggedTask);
  
      if (draggedIndex === -1) return;

      const updatedTask = { ...draggedTask, TaskStatus: targetStatus };
      allTasks.splice(draggedIndex, 1); 
      allTasks.splice(dropIndex, 0, draggedTask);

      updateTask(updatedTask);
      setDraggedTask(null);

  };

  return (
    <div className="flex justify-center w-full p-6">
      <div
        id="ToDodropZone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(event) => handleDrop(event,"To Do")}
        className="dropZone w-full bg-gray-100 p-6 m-5 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold text-sky-800 text-center">To Do</h2>
        {ToDoTasks.map((task, index) => (
          <TaskCard
            className="taskCard gap-5"
            draggable
            onDragStart={() => handleDragStart(task)}
            key={index}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>

      <div
        id="InPdropZone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(event) => handleDrop(event,"In Progress")}
        className="dropZone w-full bg-yellow-100 p-6 m-5 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold text-sky-800 text-center">In Progress</h2>
        {InProgressTasks.map((task, index) => (
          <TaskCard
          className="taskCard gap-5"
            draggable
            onDragStart={() => handleDragStart(task)}
            key={index}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>

      <div
        id="CompdropZone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(event) => handleDrop(event,"Completed")}
        className=" dropZone w-full bg-green-100 p-6 m-5 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold text-sky-800 text-center">Completed</h2>
        {CompletedTasks.map((task, index) => (
          <TaskCard
            className="taskCard gap-5"
            draggable
            onDragStart={() => handleDragStart(task)}
            key={index}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default AllTasks;
