import React from "react";
import ContactHeaderImage from "../assets/ContactHeaderImage.png";
import "../styles/ContactStyles.css";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <div className="ContactContainer">
        <div className="ContactHeader">
          <div className="ImageContainer">
            <img
              src={ContactHeaderImage}
              alt="Contact Us"
              className="ContactImage"
            />
          </div>
          <div className="HeaderOverlay">
            <p className="OverlaySubtitle"></p>
          </div>
        </div>

        <h1>CONTACT US</h1>

        <div className="ContactContent">
          <section className="ContactSection">
            <div className="contact-head">
              <h2>Get In Touch</h2>
              <p>
                We're here to help and answer any question you might have. We
                look forward to hearing from you.
              </p>
            </div>

            <div className="ContactInfo">
              <h2>Corporate Office</h2>
              <p>650 Engineering Drive Peachtree Corners, GA 30092</p>
              <p>800-829-3900</p>
            </div>
          </section>

          <div className="ContactForm">
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="AdditionalSections">
          <h2>Additional Sections</h2>
          <h3>FIND A STORE</h3>
          <p>
            Use our Store Locator to find store hours, addresses, and phone
            numbers.
          </p>

          <h3>CORPORATE MAILING ADDRESS</h3>
          <p>
            EZAUTOPARTS, Inc. Store Support Center 650 Engineering Drive
            Peachtree Corners, GA 30092
          </p>

          <h3>CAREER OPPORTUNITIES</h3>
          <a href="https://jobs.advanceautoparts.com/">
            https://jobs.advanceautoparts.com/
          </a>

          <h3>INVESTOR RELATIONS</h3>
          <a href="https://ir.advanceautoparts.com">
            https://ir.advanceautoparts.com
          </a>

          <h3>REAL ESTATE INQUIRES</h3>
          <a href="https://corp.advanceautoparts.com/realestate/">
            https://corp.advanceautoparts.com/realestate/
          </a>

          <div className="contact-press">
            <div>
              <h3>PRESS / MEDIA</h3>
              <p>Press Releases</p>
            </div>

            <div>
              <h3>CHARITABLE CONTRIBUTIONS</h3>
              <p>Learn More About Our Community Work.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
