import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import { HomePage } from '../homePage'
import './index.css'
import React from "react";

export const NavBar = () =>{
    return(
        <div>
        <nav id="navbar" className="">
          <div className="nav-wrapper">
            <div className="logo">
            
              <a href="#home"><i className=""></i><img style={{width:'20px',height:'30px'}} src="/vWhiteImage.png" /></a>
            </div>
        
            <ul id="menu">
              <li><Link style={{fontWeight:'bold',fontSize:'16px'}} to="/">Home</Link></li>
           <li><Link style={{fontWeight:'bold',fontSize:'16px'}} to="/ourProduct">Our Products</Link></li>
           <li><Link style={{fontWeight:'bold',fontSize:'16px'}} to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        
        
        <div className="menuIcon">
          <span className="icon icon-bars"></span>
          <span className="icon icon-bars overlay"></span>
        </div>
       
        <div className="overlay-menu">
          <ul id="menu">
          <li><Link style={{fontWeight:'bold'}} to="/">Home</Link></li>
           <li><Link style={{fontWeight:'bold'}} to="/ourProduct">Our Products</Link></li>
           <li><Link style={{fontWeight:'bold'}} to="/users">Contact</Link></li>
            </ul>
        </div>   
        </div>
         )
}
