import React, { useEffect, useRef, useState } from "react";
import { Card, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { updateTask, deleteTask, getAllTasks } from "../hooks/taskHook";

const TaskCard = ({ task, onEdit, onDelete, draggable, onDragStart }) => {
  return (
    <Card className="m-5"
      onDragStart={onDragStart} 
      draggable={draggable}
      title={task.TaskName}
      border={true}
      actions={[
        <EditOutlined key="edit" onClick={() => onEdit(task)} />,
        <DeleteOutlined
          key="delete"
          onClick={() => onDelete(task.TaskName)}
          style={{ color: "red" }}
        />,
      ]}
    >
      <p>{task.TaskDescription}</p>
    </Card>
  );
};

export default TaskCard;
