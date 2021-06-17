import React from 'react'
// import AppBar from '@material-ui/core/AppBar';
import {  NavLink } from 'react-router-dom';
import "./Dofa.css"
import "bootstrap/dist/css/bootstrap.css";
// import logo from "./logo1.png"
// import { red } from '@material-ui/core/colors';



const Navigation = () => {
  
  return (
   
  
    <div className="container-fluid navbar-light animate-navbar">
      <div className="row">
        <div className="col-10 mx-auto">

     

    <nav className="navbar navbar-expand-sm fixed-top bg-white shadow">

      {/* <a className="navbar-brand">DHANDA PANI</a> */}
      <b className="bold">DHANDA PANI</b>
      {/* <img className="navbar-brand" src={logo} alt="k"/> */}

      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/"> Home</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login3">Login</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/help">Help</NavLink>
          
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/browse" style={{backgroundColor:"red",fontFamily:"sans-serif"}}>Browse Jobs</NavLink>
          
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/add">cart</NavLink>
          
        </li> */}

      </ul>
    </nav>
    </div>
      </div>
    </div>
    




  )
}

export default Navigation
