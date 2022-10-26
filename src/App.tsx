import React from 'react';
//React bootstrap
import {  } from 'react-bootstrap';
//React-Router
import { Routes, Route } from 'react-router-dom'
//Components
import Navbar from './components/navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>

      <Navbar />
      

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
