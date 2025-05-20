import { useState } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './assets/component/layout/Navbar';
import Student from './assets/component/student/Student';


function App() {

  return (
    <>
      <Navbar/>
      <Student/>
    </>
  )
}

export default App
