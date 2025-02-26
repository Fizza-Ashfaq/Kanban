import React, { useContext } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { TaskDataContext } from './TaskDataProvider';

const { Option } = Select;

const AddCard = () => {
  const { addNewTask } = useContext(TaskDataContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    const newTaskData = {
      TaskName: values.TaskName,
      TaskDescription: values.TaskDescription,
      TaskStatus: values.TaskStatus,
      TaskPriority: values.TaskPriority,
    };
    addNewTask(newTaskData);
    navigate('/HomePage');
  };

  return (
    <div className='flex W-full justify-center'>
      <div className='flex flex-wrap pl-8 p-8 shadow-lg shadow-cyan-500/50 rounded-md border-solid border-2 w-[800px]'>
        <Form className='w-full p-8' name="AddTask" layout="vertical" onFinish={onFinish}>
          <Form.Item label="Task Name" name="TaskName" rules={[{ required: true, message: 'Please input the Task Name!' }]}>
            <Input className="w-full" placeholder="Enter Task Name" />
          </Form.Item>
          
          <Form.Item label="Task Description" name="TaskDescription" rules={[{ required: true, message: 'Please enter a Task Description!' }]}>
            <Input placeholder="Enter Task Description" />
          </Form.Item>
          
          <Form.Item label="Task Status" name="TaskStatus" rules={[{ required: true, message: 'Please select the Task Status!' }]}>
            <Select placeholder="Select Task Status">
              <Option value="To Do">To Do</Option>
              <Option value="In Progress">In Progress</Option>
              <Option value="Completed">Completed</Option>
            </Select>
          </Form.Item>
          
          <Form.Item label="Task Priority" name="TaskPriority" rules={[{ required: true, message: 'Please select the Task Priority!' }]}>
            <Select placeholder="Select Task Priority">
              <Option value="Low">Low</Option>
              <Option value="Medium">Medium</Option>
              <Option value="High">High</Option>
            </Select>
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Task
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddCard;
