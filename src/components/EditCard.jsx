import React, { useContext, useState,useEffect } from 'react';
import { Form, Input, Button, Select,DatePicker } from 'antd';
import toast from 'react-hot-toast';
import { TaskDataContext } from './TaskDataProvider';
import dayjs from 'dayjs';
const { Option } = Select;

const EditCard = ({task}) => {
  const {update}=useContext(TaskDataContext);
  const [form]=Form.useForm();

  useEffect(() => {
    form.setFieldsValue(
      {
        TaskName:task.TaskName,
        TaskDescription: task.TaskDescription,
        TaskStatus: task.TaskStatus,
        TaskPriority: task.TaskPriority,
        DueDate: task.DueDate? dayjs(task.DueDate) : null,
      }
    );
  }, [task,form]);
   
  const onFinish = async(values) => {
    const newTaskData = {
      _id: task._id,
      TaskName: values.TaskName,
      TaskDescription: values.TaskDescription,
      TaskStatus: values.TaskStatus,
      TaskPriority: values.TaskPriority,
      DueDate:values.DueDate ? dayjs(values.DueDate).format('YYYY-MM-DD') : null, 
    };
    const data = await update(newTaskData);
  };

  return (
    
    <> 
    <div className='flex W-full justify-center'>
      <div className='flex flex-wrap pl-8 p-8 shadow-lg shadow-cyan-500/50 rounded-md border-solid border-2 w-[800px]'>
        <Form  form={form} className='w-full p-8' name="AddTask" layout="vertical" onFinish={onFinish}>
          <Form.Item label="Task Name" name="TaskName" rules={[{ required: true, message: 'Please input the Task Name!' }]}>
            <Input className="w-full" placeholder="Enter Task Name" />
          </Form.Item>
          
          <Form.Item label="Task Description" name="TaskDescription" rules={[{ required: true, message: 'Please enter a Task Description!' }]}>
            <Input placeholder="Enter Task Description" />
          </Form.Item>
          
          <Form.Item label="Task Status" name="TaskStatus" rules={[{ required: true, message: 'Please select the Task Status!' }]}>
            <Select placeholder="Select Task Status">
              <Option value="Pending">Pending</Option>
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

          <Form.Item label="Due Date" name="DueDate" rules={[{ required: true, message: 'Please select a Due Date!' }]}>
            <DatePicker className="w-full" format="YYYY-MM-DD" />
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Task
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    </>
  );
};

export default EditCard;
