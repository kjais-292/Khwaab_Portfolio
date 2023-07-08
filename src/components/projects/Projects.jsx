import React from 'react'
import './projects.css'
import ProjectBox from '../project-box/ProjectBox'
import Fade from 'react-reveal/Fade';

const Projects = () => {
  return (
    <section class="project" id="project">
        <Fade top><h2 class="heading">Latest <span>Projects</span></h2></Fade>
        <div class="project-container">
        <Fade bottom>
            <ProjectBox heading="Web Design" 
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quaerat!"/>
            <ProjectBox heading="Web Design" 
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quaerat!"/>
            <ProjectBox heading="Web Design" 
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quaerat!"/>
            <ProjectBox heading="Web Design" 
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quaerat!"/>
            <ProjectBox heading="Web Design" 
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quaerat!"/>
            <ProjectBox heading="Web Design" 
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quaerat!"/></Fade>
        </div>
    </section>
  )
}

export default Projects
