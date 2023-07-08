import React from 'react'
import './about.css'
import home from '../../assets/home.jpg'
import Button from '../button/Button'
import Fade from 'react-reveal/Fade';

const Experience = () => {
  return (
    <section class="experience" id="experience">
        <div className="about">
            <div class="home-img">
                <Fade left><img src={home} alt="Unable to load"/></Fade>
            </div>
            
            <div class="about-content">
            <Fade right>
                <h2 class="heading">About <span>Me</span></h2>
                <h3>Frontend Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus, quis hic ad exercitationem quae non facilis nobis. Ipsum error recusandae minima. Obcaecati nemo voluptatum atque provident accusantium commodi, recusandae nostrum, quam placeat architecto voluptatibus aliquam facere consequatur. Reiciendis, quas.</p>
                <Button text="Read More..."/>
                </Fade>
            </div>
            
        </div>
        <div class="service">
            <Fade top><h2 class="heading">Our <span>Services</span></h2></Fade>
            <div class="service-container">
            <div class="service-box">
            <i class="bx bx-code-alt"></i>
                    <h3>Website Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex animi iste laboriosam quasi nisi suscipit veritatis, exercitationem consequatur porro!</p>
                    <Button text="Read More..."/>
                </div>
                 <div class="service-box">
                 <i class="bx bxs-paint"></i>
                    <h3>Graphic Designing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex animi iste laboriosam quasi nisi suscipit veritatis, exercitationem consequatur porro!</p>
                    <Button text="Read More..."/>
                </div>
                <div class="service-box">
                <i class="bx bx-bar-chart-alt"></i>
                    <h3>Problem Solver</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex animi iste laboriosam quasi nisi suscipit veritatis, exercitationem consequatur porro!</p>
                    <Button text="Read More..."/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
