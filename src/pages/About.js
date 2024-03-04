import React from 'react'
import '../styles/About.css'
import Aboutus from '../assets/Aboutus.png'

function About() {
  return (
    <div className="Aboutus">
      <div className="AboutusImage">
        <img src={Aboutus} alt="Aboutus" />
        <div className="OverlayText">About Us</div>
    </div>
    <div className="AboutText">
    <h2>About EZAutoParts</h2>
        <p>Welcome to EZAutoParts, your one-stop e-commerce shop for all your auto part needs! At EZAutoParts, we understand that finding the right auto parts can be a daunting task, especially if you're not a car expert. That's why we've made it our mission to make the search for auto parts easier, more convenient, and more affordable for everyone.</p>
        
    <h3>Our Story</h3>
        <p>Founded in 2024, EZAutoParts was born out of a passion for cars and a frustration with the lack of user-friendly options for buying auto parts online. Our team of automotive enthusiasts and tech experts came together to create a solution that would revolutionize the way people shop for auto parts.</p>
        
        <h3>Our Mission</h3>
        <p>Our mission at EZAutoParts is simple: to provide our customers with the best online shopping experience for auto parts. We strive to offer a wide selection of high-quality parts, competitive prices, and exceptional customer service. Whether you're a car enthusiast or just need to fix your daily driver, we're here to help you find the right parts quickly and easily.</p>
        
        <h3>Why Choose EZAutoParts?</h3>
        <ul>
          <li>Wide Selection: We offer a vast selection of auto parts for all makes and models, so you can easily find what you need.</li>
          <li>Quality Assurance: All our parts are sourced from trusted manufacturers and undergo rigorous quality control checks to ensure they meet our standards.</li>
          <li>Expert Advice: Our team of auto experts is here to help you find the right parts for your vehicle and answer any questions you may have.</li>
          <li>Fast Shipping: We offer fast and reliable shipping options to get your parts to you as quickly as possible.</li>
          <li>Customer Satisfaction: Your satisfaction is our top priority. If you're not happy with your purchase, we'll do everything we can to make it right.</li>
        </ul>
        
        <h3>Contact Us</h3>
        <p>Have a question or need assistance? Our customer service team is here to help! You can reach us by email at <a href="mailto: [email protected]"> [EZAuto@Parts.com]</a> or by phone at 1-800-EZ-AUTO. We're available Monday through Friday, 9am to 5pm EST.</p>
        
        <p>Thank you for choosing EZAutoParts for all your auto part needs. We look forward to serving you!</p>
      </div>
    </div>


  )
}

export default About