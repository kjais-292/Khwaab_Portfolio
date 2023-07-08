import React from 'react';
import home from '../../assets/home.jpg';
import './header.css';
import Button from '../button/Button'
import Fade from 'react-reveal/Fade';
import Typed from "typed.js";
import { useEffect, useRef } from "react";


export default function Header(){
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Coding Enthusiast", "Problem Solver"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,loop:true,showCursor: true,
      cursorChar: "!"
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return(
  <div className="header section__padding" id="home">
    <Fade top>
    <div className="header-content">
        <h3>Hello, It's me</h3>
        <Fade left><h1>Khwaab Jaiswal</h1></Fade>
        <h3>And I'm a <span className="multiple-text"ref={el}></span></h3>
        <Fade right><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, deserunt? Corporis et reprehenderit officia magni!</p></Fade>

        <div className="header-content__socialmediaicons">
            <a href="http://www.facebook.com/profile.php?id=100072045143997" target="_blank" rel="noreferrer"><i class='bx bxl-facebook'></i></a>
            <a href="https://twitter.com/kjais_292" target="_blank" rel="noreferrer"><i class='bx bxl-twitter' ></i></a>
            <a href="https://instagram.com/khwaab_jais?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noreferrer"><i class='bx bxl-instagram-alt' ></i></a>
            <a href="https://www.linkedin.com/in/khwaab-jaiswal-0466a8227" target="_blank" rel="noreferrer"><i class='bx bxl-linkedin' ></i></a>
            <a href="https://github.com/kjais-292" target="_blank" rel="noreferrer"><i class='bx bxl-github'></i></a>
        </div>

        <div className="header-content__resume">
          <Button text="Download Resume"/>
        </div>
    </div>
    </Fade>

     <Fade bottom>
    <div className="header-image">
      <img src={home} alt="Unable to load"/>
    </div></Fade> 
  </div>
);
  }
