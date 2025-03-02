import React from "react";
import { Form, Input, Button } from "antd";
import { loginUser } from "../hooks/userHook";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const LoginCard = () => {
  const navigate = useNavigate();

  const onFinish=async(data) => {
    const res=await loginUser(data);
    if(res.length<0)
    {
        toast.error("Error signing up");
        return;
    }
    toast.success("Login successful");
    setTimeout(() => {
        navigate("/HomePage");
      }, 1000);
};

  
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex flex-wrap pl-8 p-8 shadow-lg shadow-cyan-500/50 rounded-md border-solid border-2 w-[800px]">
          <Form
            className="w-full p-8"
            name="LoginForm"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                  type: "email",
                },
              ]}
            >
              <Input className="w-full" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                className="w-full"
                placeholder="Enter your password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Login
              </Button>
            </Form.Item>

            <div className="text-center mt-4">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => navigate("/SignUpPage")}
                >
                  Sign up here
                </span>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
