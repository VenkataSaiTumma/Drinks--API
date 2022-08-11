import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './main/Home';
import About from './main/About';
import SingleDrink from './main/SingleDrink';
import Navbar from './components/Navbar';
import Error from './main/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/singledrink/:id'element={<SingleDrink />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;