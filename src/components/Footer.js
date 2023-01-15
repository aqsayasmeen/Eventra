import React from 'react'

export default function Footer() {
  return (
    <div>
      <section className="footer">

<div className="box-container">
    <div className="box">
        <h2>quick links</h2>
        <a href="#"> <i className="fas fa-arrow-right"></i> Home </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> Service </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> About </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> Price </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> Contact Us</a>
    </div>

    <div className="box">
        <h2>contact info</h2>
        <a href="#"> <i className="fas fa-phone"></i> +92 3245285309 </a>
        <a href="#"> <i className="fas fa-envelope"></i> **********@gmail.com </a>
        <a href="#"> <i className="fas fa-map-marker-alt"></i> Pakistan-Taxila </a>
    </div>

    <div className="box">
        <h2>follow us</h2>
        <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
        <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
        <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
        <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
    </div>

</div>

<div className="credit"> <span>&copy;{new Date().getFullYear()}</span> | Evento all rights reserved </div>

</section>  
    </div>
  )
}
