import React from "react";
import { Form, Input, Button, Select } from "antd";
import { signUpUser } from "../hooks/userHook";
const { Option } = Select;
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const Navigate = useNavigate();
  const onFinish = async (data) => {
    const res = await signUpUser(data);
    if (res.length < 0) {
      toast.error("Error signing up");
      return;
    }
    toast.success("Signup successful");
    setTimeout(() => {
      Navigate("/HomePage");
    }, 1000);
  };

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex flex-wrap pl-8 p-8 shadow-lg shadow-cyan-500/50 rounded-md border-solid border-2 w-[800px]">
          <Form
            className="w-full p-8"
            name="SignupForm"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input className="w-full" placeholder="Enter your name" />
            </Form.Item>

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

            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: "Please select a role!" }]}
            >
              <Select placeholder="Select role">
                <Option value="user">User</Option>
                <Option value="admin">Admin</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>

            <div className="text-center mt-4">
              <p className="text-gray-600">
                Already have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => Navigate("/LoginPage")}
                >
                  Login here
                </span>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
