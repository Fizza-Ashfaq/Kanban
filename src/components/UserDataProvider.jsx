import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {loginUser,signUpUser,logout} from '../hooks/userHook';
import toast from 'react-hot-toast';
export const UserDataContext=React.createContext();


function UserDataProvider({ children }) {
    const navigate = useNavigate();
    const [user,setUser]=useState();

    const loginFunc=(async(data) => {
        const res=await loginUser(data);
        if(res.status==200) {
            setUser(res);
            toast.success('Logged in successfully');
            setTimeout(() => {
                navigate("/HomePage");
              }, 1000);
        }
        else{
            toast.error('Invalid credentials');
        }
    })

    const signUpFunc=(async(data) => {
        const res=await signUpUser(data);
        if(res.status==201){
            setUser(res);
            toast.success('User Signed Up in successfully');
            setTimeout(() => {
                navigate("/HomePage");
              }, 1000);
        }
        else{
            toast.error('Invalid credentials');
        }
    })

    const logoutFunc=(async(data) => {
        const res=await logout(data);
        if(res.status==200){
        setUser(null);
        toast.success('Logged out successfully');
        setTimeout(() => {
            navigate("/LoginPage");
          }, 1000);
        }
        else{
            toast.error('Unable to logout');
        }
        
    
})

  return (
    <UserDataContext.Provider value={{user,loginFunc,signUpFunc,logoutFunc}}>
        {children}
    </UserDataContext.Provider>
  )
}

export default UserDataProvider