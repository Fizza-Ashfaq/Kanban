import React from 'react'
import EditCard from '../components/EditCard'
import Navbar from '../components/Navbar'
import {useLocation} from "react-router-dom"
function EditPage() {
  const location = useLocation()
  const task=location.state.task;
  return (
    <>
        <Navbar />
    <h1 className=" justify-center items-center text-2xl font-bold text-center text-blue-700 m-2 ">Update Task</h1>
    <EditCard  task={task}/>

    </>
  )
}

export default EditPage