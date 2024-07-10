import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons/faGlobeEurope";
import { faGithub, faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import maria from "../img/me.png";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        
        
          <div class="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <div id="text-display-4 fw-bold"></div> <h1 classname="text-dark"> Hello, I'm Maria</h1>
                      <br />
                      <p className="self text-dark align-items-right">
                        A graduating BSIT student from CPSU. I am driven by a passion to innovate and apply my skills to create
                        solutions that make a meaningful difference in the world of IT.
                      </p>
                      <br></br>
                      <p className="self text-dark">"In the world of Information Technology, innovation is not just about code; it's about crafting solutions 
                        that redefine what's possible."</p>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={maria}
                        alt="Profile Picture of Maria"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Home;
