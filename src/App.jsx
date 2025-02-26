import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDataProvider  from './components/TaskDataProvider';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import './index.css';

function App() {

  return (
    <>
      <TaskDataProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/AddPage' element={<AddPage />} />
          <Route path='/EditPage' element={<EditPage />} />
        </Routes>
      </TaskDataProvider>
    </>
  )
}

export default App
