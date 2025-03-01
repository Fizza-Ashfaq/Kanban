import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDataProvider  from './components/TaskDataProvider';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import SignUpPage from './pages/SignUpPage';
import './index.css';

function App() {

  return (
    <>
      <TaskDataProvider>
        <Routes>
          <Route path='/' element={<SignUpPage />} />
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/AddPage' element={<AddPage />} />
          <Route path='/EditPage' element={<EditPage />} />
          <Route path='/SignUpPage' element={<SignUpPage />} />
        </Routes>
      </TaskDataProvider>
    </>
  )
}

export default App
