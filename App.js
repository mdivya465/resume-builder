import React, { useState } from "react";
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import Download from "./components/Download";
import Navbar from "./components/navbar";
function App() {

  return (
    <div className="App">
        <Navbar/>
          <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/download" element={<Download />} />
          </Routes>
     
    </div>
  );
}
export default App;