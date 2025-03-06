import React from "react";
import { useNavigate } from "react-router-dom";
import AllTasks from "../components/AllTasks";
import Navbar from "../components/Navbar";
import { Button } from "antd";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className=" w-screen flex flex-col justify-centre items-center">
        <h1 className="text-3xl font-bold text-blue-700 mt-4">Kanban</h1>

        <Button
          className="flex justify-center mt-6 text-sky-700 border-solid"
          onClick={() => navigate("/Add")}
          type="danger"
        >
          Add Task +
        </Button>

          <div className="mt-6 w-full flex justify-center">
          <AllTasks />
        </div>
      </div>
    </>
  );
};

export default Home;
