import React from 'react'
import './projectbox.css'
import portfolio1 from '../../assets/portfolio1.jpg'

const ProjectBox = ({heading,para,imgsrc}) => {
  return (
    <div class="project-box">
        <img src={portfolio1} alt="Can't Load"/>
        <div class="project-layer">
            <h4><span>{heading}</span></h4>
            <p>{para}</p>
            <a href="#home"><i class="bx bx-link-external"></i></a>
        </div>
    </div>
  )
}

export default ProjectBox
