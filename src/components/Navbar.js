import React from 'react'

export default function Navbar() {
  return (
    <div className="header">
       

<img src ='./images/eventra.png' alt="no image" style={{height:"70px", width:"80px"}}/>

<nav className="navbar">
    <a href="#home">Home</a>
    <a href="#service">Service</a>
    <a href="#about">About</a>
    <a href="#price">Price</a>
    <a href="#contact">Contact</a>
    <a href="/Login">Login</a>
    <a href="/SignUp">Signup</a>
</nav>

<div id="menu-bars" className="fas fa-bars"></div>


    </div>
  )
}
