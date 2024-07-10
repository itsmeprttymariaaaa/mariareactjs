import React from "react";
import "./Contact.css";

import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons/faGlobeEurope";
import { faGithub, faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact section" id="contact">
        <div className="container">
          <div className="container">
            <div className="row">
            </div>
          </div>
          <h3 className="contact-title padd-15 fw-bold">Do you need any further information?</h3>
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faInstagram} />
              </div>
              <p>_prttymariajuana</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faFacebook} />
              </div>
              <p>Maria</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faGithub} />
              </div>
              <p>itsmeprttymariaaaa</p>
            </div>
          </div>
          </div>
          <h3 className="contact-title padd-15 fw-bold">KINDLY SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15 fw-bold">Please allow some time for me to get back to messages.</h4>
          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Subject" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
              </div>
              <div className="row"> 
                <div className="form-item col- padd-15">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
            </div>
          </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <div className="social-icons">
            <a href="https://www.instagram.com/_prttymariajuana/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
              </a>
              
              <a href="https://facebook.com/YramEnajO.Taisgap" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
              </a>

              <a href="https://github.com/itsmeprttymariaaaa" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
              </a>

              <p>©2024 by <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">Maria.</a> All rights reserved.</p>
             

            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
