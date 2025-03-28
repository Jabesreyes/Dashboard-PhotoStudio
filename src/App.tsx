import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';

import './App.css'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/login" element={<Dashboard />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
