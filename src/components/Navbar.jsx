import React from "react";
import { Tabs } from "antd";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const items = [
    {
      key: "/HomePage",
      label: <Link to="/HomePage">Home</Link>,
    },
    {
      key: "/AddPage",
      label: <Link to="/AddPage">Add Task</Link>,
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
