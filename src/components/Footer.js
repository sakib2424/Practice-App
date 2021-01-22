import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Click to subscribe to newsletter
        </p>
        <p className="footer-subscription-text">Subscribe here anytime</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            ></input>
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="google.com">How it works</Link>
            <Link to="google.com">Second link</Link>
            <Link to="google.com">Third link</Link>
          </div>

          <div className="footer-link-items">
            <h2>2nd heading</h2>
            <Link to="google.com">Testing</Link>
            <Link to="google.com">These</Link>
            <Link to="google.com">Links</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="google.com">How it works</Link>
            <Link to="google.com">Second link</Link>
            <Link to="google.com">Third link</Link>
          </div>

          <div className="footer-link-items">
            <h2>2nd heading</h2>
            <Link to="google.com">Testing</Link>
            <Link to="google.com">These</Link>
            <Link to="google.com">Links</Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-app">
          <div className="footer-logo">
            <Link className="social-logo">
              TRVL <i className="fab fa-typo3"></i>
            </Link>
          </div>

          <small className="website-rights">TRVL 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
