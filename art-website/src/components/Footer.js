import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our group of inspiring artists today!
        </p>
        {/* <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p> */}
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
            LEHMAN SISTERS
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">LEHMAN SISTERS © 2025</small>
          <div class="social-icons">
            <Link
              class="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn">
              <i class="fab fa-linkedin" />
            </Link>
            <Link
              class="social-icon-link github"
              to="/"
              target="_blank"
              aria-label="Github">
              <i class="fab fa-github" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram">
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube">
              <i class="fab fa-youtube" />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
