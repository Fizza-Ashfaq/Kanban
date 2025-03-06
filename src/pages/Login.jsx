import React from "react";
import LoginCard from "../components/LoginCard";
import { Toaster } from "react-hot-toast";

const Login = () => {
  return (
    <div>
      <Toaster />
      <h1 className=" justify-center items-center text-2xl font-bold text-center text-blue-700 m-2 ">
        LOGIN
      </h1>
      <LoginCard />
    </div>
  );
};

export default Login;
