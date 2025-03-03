import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDataProvider  from './components/TaskDataProvider';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import SignUpPage from './pages/SignUpPage';
import './index.css';
import LoginPage from './pages/LoginPage';
import LoggerPage from './pages/LoggerPage';
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/LoggerPage' element={<LoggerPage />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/AddPage' element={<AddPage />} />
          <Route path='/EditPage' element={<EditPage />} />
          <Route path='/SignUpPage' element={<SignUpPage />} />
        </Routes>
        <Toaster position="top-center" reverseOrder={false}/>   
    </>
  )
}

export default App
