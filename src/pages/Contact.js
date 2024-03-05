import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import ContactHeaderImage from '../assets/ContactHeaderImage.png';
import '../styles/ContactStyles.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return (
    <div>
      <div className="ContactContainer">
        <div className="ContactHeader">
          <div className="ImageContainer">
            <img src={ContactHeaderImage} alt="Contact Us" className="ContactImage" />
          </div>
          <div className="HeaderOverlay">
            <h1 className="OverlayTitle" style={{ marginBottom: '20px' }}></h1>
            <p className="OverlaySubtitle"></p>
          </div>
        </div>

        <div className="ContactContent">
          <section className="ContactSection">
            <h2 className="ContactTitle">Get In Touch</h2>
            <p className="ContactParagraph">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
            
            <div className="ContactInfo">
              <h3>Corporate Office</h3>
              <p>650 Engineering Drive<br />Peachtree Corners, GA 30092<br />800-829-3900</p>
            </div>
            
          </section>

          <div className="ContactForm">
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
          </div>
          <div className="AdditionalSections">
        <h2>Additional Sections</h2>
        <p>FIND A STORE</p>
        <p>Use our Store Locator to find store hours, addresses, and phone numbers.</p>
        
        <p>CORPORATE MAILING ADDRESS</p>
        <p>EZAUTOPARTS, Inc.<br />Store Support Center<br />650 Engineering Drive<br />Peachtree Corners, GA 30092</p>
        
        <p>CAREER OPPORTUNITIES</p>
        <a href="https://jobs.advanceautoparts.com/">https://jobs.advanceautoparts.com/</a>
        
        <p>INVESTOR RELATIONS</p>
        <a href="https://ir.advanceautoparts.com">https://ir.advanceautoparts.com</a>
        
        <p>REAL ESTATE INQUIRES</p>
        <a href="https://corp.advanceautoparts.com/realestate/">https://corp.advanceautoparts.com/realestate/</a>
        
        <p>PRESS / MEDIA</p>
        <p>Press Releases</p>
        
        <p>CHARITABLE CONTRIBUTIONS</p>
        <p>Learn More About Our Community Work.</p>
    </div>
        <footer className="ContactFooter">
          <div className="ContactInfo">
            <h2>Contact Information</h2>
            <p>EZAUTOPARTS</p>
            <p>================</p>
            <p>650 Engineering Drive </p>
            <p>Peachtree Corners, GA 30092</p>
            <p>================</p>
            <p>800-829-3900</p>
            <p>Email:<a href="mailto:miloviveros@yahoo.com">miloviveros@yahoo.com</a></p>
          </div>
          <div className="SocialMedia">
            <h2>Connect with Us</h2>
            <a href="https://www.facebook.com"><FacebookIcon /></a>
            <a href="https://www.twitter.com"><TwitterIcon /></a>
            <a href="https://www.instagram.com"><InstagramIcon /></a>
          </div>
          <div className="BusinessHours">
            <h2>Business Hours</h2>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Contact;

