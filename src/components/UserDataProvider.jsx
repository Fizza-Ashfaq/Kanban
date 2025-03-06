import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, signUpUser, logout } from "../hooks/userHook";
import toast from "react-hot-toast";
export const UserDataContext = React.createContext();

function UserDataProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const loginFunc = async (data) => {
    try {
      const res = await loginUser(data);

      if (res.status == 200) {
        setUser(res);
        localStorage.setItem("user", JSON.stringify(res.data)); 
        toast.success("Logged in successfully");
        // setTimeout(() => {
          navigate("/Home");
        // }, 1000);
      } else {
        toast.error(res);
      }
    } catch (error) {
      toast.error("error");
    }
  };

  const signUpFunc = async (data) => {
    const res = await signUpUser(data);
    if (res.status == 201) {
      setUser(res);
      localStorage.setItem("user", JSON.stringify(res.data)); 
      toast.success("User Signed Up successfully");
      setTimeout(() => {
        navigate("/Home");
      }, 1000);
    } else {
      toast.error("Invalid credentials");
    }
  };

  const logoutFunc = async (data) => {
    try {
      const res = await logout(data);
      if (res.status == 200) {
        setUser(null);
        localStorage.removeItem("user"); 
        toast.success("Logged out successfully");
        // setTimeout(() => {
          navigate("/Login");
        // }, 1000);
      } else {
        setTimeout(() => {  
          toast.error("Unable to logout");
        }, 1000);
      }
    } catch (error) {}
  };

  return (
    <UserDataContext.Provider
      value={{ user, loginFunc, signUpFunc, logoutFunc }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataProvider;
