import React from 'react'
import Navbar from '../components/Navbar'
import AddCard from '../components/AddCard'
function EditPage() {
  return (
    <>
    <Navbar />
    <h1 className="flex justify-center items-center text-2xl font-bold text-center text-blue-700 m-2 ">Add Task</h1>
    <AddCard/>
  

    </>
  )
}

export default EditPage