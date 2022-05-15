//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from "./components/home/Home";
import TourDetails from './components/tourDetails/TourDetail'
//const tourData = require('../../Data/db.json');
import { Routes, Route } from "react-router-dom";
import tourData from './Data/db.json';

//import Tour from "./components/tours/Tours";
function App() {
  return (
    <center>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails data={tourData} />} />
    </Routes>
    </center>
  );
}

export default App;
