import React from "react";
import "../styles/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="">
        <h2>Company</h2>
        <p>EZAUTOPARTS</p>
        <p>================</p>
        <p>650 Engineering Drive</p>
        <p>Peachtree Corners, GA 30092</p>
      </div>
      <div className="BusinessHours">
        <h2>Business Hours</h2>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday: 10am - 4pm</p>
        <p>Sunday: Closed</p>
      </div>
      <div className="SocialMedia">
        <h2>Connect with Us</h2>
        <p>800-829-3900</p>
        <p>
          Email:{" "}
          <a href="mailto:miloviveros@yahoo.com">miloviveros@yahoo.com</a>
        </p>
        <Link style={{ textDecoration: "none" }} to="/FAQ"><p>FAQ</p></Link>
        <div className="footer-icons">
          <a href="https://www.facebook.com">
            <FacebookIcon className="social-icon" />
          </a>
          <a href="https://www.twitter.com">
            <TwitterIcon className="social-icon" />
          </a>
          <a href="https://www.instagram.com">
            <InstagramIcon  className="social-icon"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
