import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskDataProvider from "./components/TaskDataProvider";
import UserDataProvider from "./components/UserDataProvider";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import SignUp from "./pages/SignUp";
import "./index.css";
import Login from "./pages/Login";
import Logger from "./pages/Logger";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <UserDataProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <TaskDataProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Logger" element={<Logger />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Add" element={<Add />} />
            <Route path="/Edit" element={<Edit />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </TaskDataProvider>
      </UserDataProvider>
    </>
  );
}

export default App;
