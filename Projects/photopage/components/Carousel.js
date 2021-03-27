import { useEffect, useState } from "react";

import styles from "../styles/Carousel.module.css"


export default function Carousel(){

  let imgTranslate;

  useEffect(()=>{
    imgTranslate = window.innerWidth;
  })
  
  let slideCount = 0;
  
  
  function nextSlide () {
    let carousel = document.getElementById("carousel");
    carousel.style.transform = `translate(-${imgTranslate}px)`;
    imgTranslate += document.getElementById("carousel").offsetWidth;
  }

  function prevSlide (){
    let carousel = document.getElementById("carousel");
    carousel.style.transform = `translate(${imgTranslate}px)`;
    imgTranslate -= document.getElementById("carousel").offsetWidth;
  }

  return(
    <div className={`${styles.Carousel}`}>
      
      <div id="carousel" className={`${styles.container}`}>
        <img src={"/images/wallhaven-gjdz5e.jpg"}></img>
        <img src={"/images/wallhaven-j85dq5.jpg"}></img>
        <img src={"/images/wallhaven-mdyqlk.jpg"}></img>
        <img src={"/images/wallhaven-01elkv.jpg"}></img>
        <img src={"/images/wallhaven-wy2wvr.jpg"}></img>
        <img src={"/images/wallhaven-4x916v.jpg"}></img>
        <img src={"/images/wallhaven-yjr2rl.jpg"}></img>
        <img src={"/images/wallhaven-6qj596.jpg"}></img>
        <img src={"/images/wallhaven-gjdz5e.jpg"}></img>
        <img src={"/images/wallhaven-j85dq5.jpg"}></img>
        <img src={"/images/wallhaven-mdyqlk.jpg"}></img>
        <img src={"/images/wallhaven-01elkv.jpg"}></img>
        <img src={"/images/wallhaven-wy2wvr.jpg"}></img>
        <img src={"/images/wallhaven-4x916v.jpg"}></img>
        <img src={"/images/wallhaven-yjr2rl.jpg"}></img>
        <img src={"/images/wallhaven-6qj596.jpg"}></img>
      </div>
      <div>
        <button onClick={prevSlide}>previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  )
}