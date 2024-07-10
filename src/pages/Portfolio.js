import "./Portfolio.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons/faGlobeEurope";
import { faGithub, faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";

import defense0 from "../img/defense.000.webp";
import defense1 from "../img/defense.001.webp";
import defense2 from "../img/defense.002.webp";
import survey0 from "../img/survey1.webp";
import survey1 from "../img/survey2.webp";
import survey4 from "../img/survey5.webp";
import finaldef1 from "../img/finaldef1.webp";
import finaldef2 from "../img/finaldef2.webp";
import finaldef3 from "../img/finaldef3.webp";
import seminar1 from "../img/seminar.000.webp";
import seminar3 from "../img/seminar.002.webp";
import seminar4 from "../img/seminar.003.webp";
import ojt2 from "../img/ojt.000.webp";
import ojt1 from "../img/ojt.009.webp";
import ojt0 from "../img/ojt.004.webp";
import ojt3 from "../img/ojt1.jpg";
import ojt4 from "../img/ojt2.jpg";
import ojt5 from "../img/ojt.031.webp";
import ojt6 from "../img/ojt.024.webp";
import ojt7 from "../img/ojt.013.webp";
import ojt8 from "../img/ojt.030.webp";
import cert1 from "../img/cert1.webp"
import home from "../img/homeweb.png"
import about from "../img/aboutweb.png"
import services  from "../img/servicesweb.png"


const Portfolio = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-gradient">
        <div className="overlay">
          <div class="container5">
            <div id="exprience-info">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">

                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      EXPERIENCES
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <svg
            className="air-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
            </g>
            <g className="wave2">
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>

          <div class="isotope">
            <div class="row">
              <h4 className="fw-bold"><center>DURING THE SEMINAR</center></h4>

              <div class="col-lg-3 mb-6">
                <div class="item">
                  <img src={seminar4} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-3 mb-6">
                <div class="item">
                  <img src={seminar1} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-3 mb-6">
                <div class="item">
                  <img src={seminar3} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

            </div>
          </div>

          <svg
            className="air-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
            </g>
            <g className="wave2">
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>



          <div class="isotope">
            <div class="row">
              <h4 className="fw-bold"><center>PRE-ORAL CAPSTONE DEFENSE</center></h4>

              <div class="col-lg-3 mb-6">
                <div class="item">
                  <img src={defense1} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-3 mb-6">
                <div class="item">
                  <img src={defense0} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-3 mb-6">
                <div class="item">
                  <img src={defense2} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="air-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use
            href="#wave-path"
            x="50"
            y="0"
            fill="rgba(255,255,255, .5)"
          />
        </g>
        <g className="wave3">
          <use
            href="#wave-path"
            x="50"
            y="9"
            fill="rgba(255,255,255, .3)"
          />
        </g>
      </svg>


      <div class="isotope">
        <div class="row">
          <h4 className="fw-bold"><center>DURING EVALUATION FOR THE SYSTEM</center></h4>

          <div class="col-lg-3 mb-6">
            <div class="item">
              <img src={survey0} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>

          <div class="col-lg-3 mb-6">
            <div class="item">
              <img src={survey4} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>

          <div class="col-lg-3 mb-6">
            <div class="item">
              <img src={survey1} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>

        </div>
      </div>

      <svg
        className="air-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use
            href="#wave-path"
            x="50"
            y="0"
            fill="rgba(255,255,255, .5)"
          />
        </g>
        <g className="wave3">
          <use
            href="#wave-path"
            x="50"
            y="9"
            fill="rgba(255,255,255, .3)"
          />
        </g>
      </svg>



      <div class="isotope">
        <div class="row">
          <h4 className="fw-bold"><center>FINAL CAPSTONE DEFENSE</center></h4>

          <div class="col-lg-3 mb-6">
            <div class="item">
              <img src={finaldef1} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>

          <div class="col-lg-3 mb-6">
            <div class="item">
              <img src={finaldef2} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>

          <div class="col-lg-3 mb-6">
            <div class="item">
              <img src={finaldef3} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="air-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use
            href="#wave-path"
            x="50"
            y="0"
            fill="rgba(255,255,255, .5)"
          />
        </g>
        <g className="wave3">
          <use
            href="#wave-path"
            x="50"
            y="9"
            fill="rgba(255,255,255, .3)"
          />
        </g>
      </svg>



      <div class="isotope">
        <div class="row">
          <h4 className="fw-bold"><center>ON-THE-JOB TRAINING</center></h4>

      
      <div class="col-lg-3 mb-6">
            <div class="item">
              <img src={ojt3} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>

          <div class="col-lg-3 mb-6">
            <div class="item">
              <img src={ojt1} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>

          <div class="col-lg-3 mb-6">
            <div class="item">
              <img src={ojt4} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>

          <div class="row">

          <div class="col-lg-3 mb-6">
            <div class="item">
              <img src={ojt0} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>
          <div class="col-lg-3 mb-6">
            <div class="item">
              <img src={ojt5} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>
          <div class="col-lg-3 mb-6">
            <div class="item">
              <img src={ojt6} alt="one" />
              <div class="overlay"></div>
            </div>
            </div>
            </div>
          </div>
          </div>          
          

      <div id="exprience-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                MY WEBSITES
              </h1>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="air-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use
            href="#wave-path"
            x="50"
            y="0"
            fill="rgba(255,255,255, .5)"
          />
        </g>
        <g className="wave3">
          <use
            href="#wave-path"
            x="50"
            y="9"
            fill="rgba(255,255,255, .3)"
          />
        </g>
      </svg>



      <div class="isotope">
        <div class="row">

          <div class="col-lg-4 mb-3 mp-5">
            <div class="item">
              <style>justify-content</style>
              <img src={home} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>
          <div class="col-lg-4 mb-3 mp-5">
            <div class="item">
              <style>justify-content</style>
              <img src={about} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>
          <div class="col-lg-4 mb-3 mp-5">
            <div class="item">
              <style>justify-content</style>
              <img src={services} alt="one" />
              <div class="overlay"></div>
            </div>
          </div>
        </div>
      </div>
      <hr />




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

export default Portfolio;
