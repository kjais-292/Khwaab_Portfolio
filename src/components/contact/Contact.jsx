import React from 'react'
import './contact.css'
import Button from '../button/Button'
import Fade from 'react-reveal/Fade';
const Contact = () => {
  return (
    <section class="contact" id="contact">
        <Fade top><h2 class="heading">Contact <span>Me!</span></h2></Fade>
        <Fade bottom><form action="#">
            <div class="input-box">
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email Address"/>
            </div>
            <div class="input-box">
                <input type="number" placeholder="Contact Number"/>
                <input type="text" placeholder="Email Subject"/>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <Button text="Send Message"/>
        </form></Fade>
    </section>
  )
}

export default Contact;
