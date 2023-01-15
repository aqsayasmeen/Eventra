import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Swiper, SwiperSlide } from 'swiper/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

  // let menu = document.querySelector('#menu-bars');
  // let navbar = document.querySelector('.navbar');
  
  // menu.onclick = () =>{
  //   menu.classList.toggle('fa-times');
  //   navbar.classList.toggle('active');
  // }
  
  // let themeToggler = document.querySelector('.theme-toggler');
  // let toggleBtn = document.querySelector('.toggle-btn');
  
  // toggleBtn.onclick = () =>{
  //   themeToggler.classList.toggle('active');
  // }
  
  // window.onscroll = () =>{
  //   menu.classList.remove('fa-times');
  //   navbar.classList.remove('active');
  //   themeToggler.classList.remove('active');
  // }
  
  // document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
    
  //   btn.onclick = () =>{
  //     let color = btn.style.background;
  //     document.querySelector(':root').style.setProperty('--main-color', color);
  //   }
  
  // });
  
  // var swiper = new Swiper(".home-slider", {
  //   effect: "coverflow",
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: "auto",
  //   coverflowEffect: {
  //     rotate: 0,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 2,
  //     slideShadows: true,
  //   },
  //   loop:true,
  //   autoplay:{
  //     delay: 3000,
  //     disableOnInteraction:false,
  //   }
  // });
  
  // var swiper = new Swiper(".review-slider", {
  //     slidesPerView: 1,
  //     grabCursor: true,
  //     loop:true,
  //     spaceBetween: 10,
  //     breakpoints: {
  //       0: {
  //           slidesPerView: 1,
  //       },
  //       700: {
  //         slidesPerView: 2,
  //       },
  //       1050: {
  //         slidesPerView: 3,
  //       },    
  //     },
  //     autoplay:{
  //       delay: 5000,
  //       disableOnInteraction:false,
  //   }
  // });
 