import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import TaskDataProvider from "./components/TaskDataProvider";
import UserDataProvider from "./components/UserDataProvider";
import {UserDataContext} from "./components/UserDataProvider";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import SignUp from "./pages/SignUp";
import "./index.css";
import Login from "./pages/Login";
import Logger from "./pages/Logger";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { useState } from "react";
function App() {
  return (
    <UserDataProvider>
      <AppContent />
    </UserDataProvider>
  );
}

function AppContent() {
  const {user}=useContext(UserDataContext)
  // useEffect(() =>{
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   setUser(user);
  // },[]);
  return(
    <>
   
        <Toaster position="top-center" reverseOrder={false} />
        <TaskDataProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Logger" element={user? <Logger />:<Navigate to='/Login'/>} />
            <Route path="/Login" element={user? <Navigate to='/Home'/>:<Login />} />
            <Route path="/Home" element={user?<Home />:<Navigate to='/Login'/>} />
            <Route path="/Add" element={user?<Add />:<Navigate to='/Login'/>} />
            <Route path="/Edit" element={user?<Edit />:<Navigate to='/Login'/>} />
            <Route path="/SignUp" element={user? <Navigate to='/Home'/>:<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskDataProvider>

    </>
  );
}

export default App;
