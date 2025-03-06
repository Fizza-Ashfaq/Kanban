import React, { useEffect, useRef, useState } from "react";
import { Card, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const TaskCard = ({ task, onEdit, onDelete, draggable, onDragStart }) => {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return { color: "red", borderColor: "red" };
      case "medium":
        return { color: "gold", borderColor: "gold" };
      case "low":
        return { color: "green", borderColor: "green" };
      default:
        return { color: "gray", borderColor: "gray" }; // Default for unknown priority
    }
  };

  const priorityStyle = getPriorityColor(task.TaskPriority);
  return (
    <Card className="m-5"
      onDragStart={onDragStart} 
      draggable={draggable}
      title={task.TaskName}
      priority={task.TaskPriority}
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
      <br />
      <Button
        type="default"
        style={{
          color: priorityStyle.color,
          borderColor: priorityStyle.borderColor,
          fontWeight: "bold",
        }}
      >
        {task.TaskPriority}
      </Button>
    </Card>
  );
};

export default TaskCard;
