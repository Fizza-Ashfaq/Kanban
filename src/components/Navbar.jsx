import React,{useContext} from "react";
import { Tabs } from "antd";
import { Link, useLocation } from "react-router-dom";
import {UserDataContext} from '../components/UserDataProvider'

const Navbar = () => {
  const location = useLocation();
  const {user,logoutFunc}=useContext(UserDataContext)

  const onTabClick = async() => {
      await logoutFunc();
  };

  const items = [
    {
      key: "/HomePage",
      label: <Link to="/HomePage">Home</Link>,
    },
    {
      key: "/AddPage",
      label: <Link to="/AddPage">Add Task</Link>,
    },
    {
      key: "/LoggerPage",
      label: <Link to="/LoggerPage">History</Link>,
    },
    !user && {
      key: "/LoginPage",
      label: <Link to="/LoginPage">SignUp/Login</Link>,
    },
    {
      key: "/Logout",
      label: (
        <span className="cursor-pointer text-red-500" onClick={onTabClick}>
          Logout
        </span>
      ),
    }
  ];

  return (
    <nav className="w-full" >
      <Tabs
        activeKey={location.pathname}
        centered
        items={items}
        tabBarStyle={{ color: "white" }}
      />
    </nav>
  );
};

export default Navbar;
