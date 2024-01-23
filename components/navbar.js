import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
    <li>
      <Link to="/download">Details</Link>
    </li>
  </div>
  );
}
export default Navbar;