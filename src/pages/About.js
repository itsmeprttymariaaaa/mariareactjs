import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import maria from "../img/me.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />

      <section id="carton" className="parallax-container">
        <div className="parallax-background"></div>
        <div className="container mt-5 parallax-content">
          <div className="col">
            <div className="card p-5 shadow">
              <div className="row">
                <div className="col-lg-7 text">
                  <h2 className="text-secondary">About Me</h2>
                  <p>
                    Welcome to my portfolio! I am Mary Jane O. Pagsiat, a passionate and dedicated graduating student of
                    Bachelor of Science in Information Technology (BSIT) from Central Philippines State University (CPSU).
                    With a strong background in IT, I strive to bring creativity and innovation to every project I undertake.
                  </p>
                  <p>
                    Throughout my academic journey at CPSU, I have developed a solid foundation in various aspects of information technology.
                    My journey in IT has been marked by a commitment to continuous learning and improvement. I have worked on a diverse range of projects,
                    from developing responsive websites to creating efficient software applications, always seeking to push the boundaries of what is possible.
                    My goal is to create impactful and meaningful work that resonates with audiences and drives results.
                  </p>
                  <p>Thank you for visiting my portfolio. I look forward to the possibility of working together and creating something amazing.</p>
                  </div>
                <div className="col-lg-5 mb-5">
                  <center>
                    <img
                      src={maria}
                      alt="Profile Picture of Maria"
                    />
                  </center>
                  <center>
                    <div className="card box">
                      <div className="row p-2">
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faInstagram} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faFacebook} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faGithub} />
                        </div>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
</section>
        <section id="carton" className="parallax-container">
        <div className="parallax-background"></div>
        <div className="container mt-5 parallax-content">
          <div className="col">
            <div className="card p-5 shadow">
              <div className="row">
                <div className="col-lg-7 text">
                  <h4 className="text-secondary fw-bold"><center>MY ACADEMIC JOURNEY</center></h4>
                    <p>During my time at CPSU, I immersed myself in the study of information technology. I took part in numerous projects and coursework that 
                    challenged me to think critically and apply my knowledge in practical settings. Some of the highlights of my undergraduate experience include:</p>
                    <h4 className="text-secondary fw-bold">Capstone Project:</h4> 
                    <p>Developed an advanced inventory management system for a local business. This project aimed to streamline the business's inventory 
                    processes, reduce errors, and improve overall efficiency. My contributions included designing the system architecture, coding the application, and conducting user training sessions.</p>
                    <h4 className="text-secondary fw-bold">Research Assistant:</h4> <p>arch project focused on improving cybersecurity measures for small and medium enterprises (SMEs). 
                    This involved analyzing current security practices, identifying vulnerabilities, and proposing enhanced security protocols. The research outcomes included a comprehensive report and recommendations that were well-received by the participating SMEs.</p>            
                    <h4 className="text-secondary fw-bold">Relevant Coursework:</h4>
                    <p><b><i>Web Development:</i></b> Learned to create dynamic and responsive websites using HTML, CSS, JavaScript, and PHP.</p>
                    <p><b><i>Software Engineering:</i></b> Gained expertise in software development methodologies, project management, and version control systems.</p>
                    <p><b><i>Database Management</i></b> Acquired skills in designing and managing databases using SQL and other database management systems.</p>
                    <p>Throughout my academic journey, I have consistently sought to challenge myself and expand my horizons. My education at CPSU has equipped me with the tools and knowledge necessary to excel in the field of information technology, and I am excited to apply these skills in my professional career.</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>

      <section id="about" className="pb-5 pt-5">
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center"></div>
          </div>
        </div>
      </section>

      <section id="education" class="education">
        <div class="section-heading text-center mb-5">
          <h2 className="fw-bold">EDUCATION</h2>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Central Philippines State University
                      </h4>
                      <p className="text-secondary">
                        Brgy. Camingawan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2020</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        College of Arts & Sciences of Asia & the Pacific
                      </h4>
                      <p className="text-secondary">
                        Brgy. 35, Bacolod City, Negros Occidental- SHS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">Tampalon Elementary School</h4>
                      <p className="text-secondary">
                        Brgy. Tampalon, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <div className="col skills">
          <h2 className="text-center mt-5 mb-5">Skills</h2>
          <div class="row justify-content-center">
            <div class="col-lg-4 mb-4">
              <h5 class="card-title fw-bold text-center mt-5">HTML</h5>
              <p className="text-center">88%</p>
              <span class="bar">
                <span class="html"></span>
              </span>

              <h5 class="card-title fw-bold text-center mt-5">CSS</h5>
              <p className="text-center">95%</p>
              <span class="bar">
                <span class="css"></span>
              </span>
            </div>
            <div class="col-lg-4 mb-4">
              <h5 class="card-title fw-bold text-center mt-5">JAVASCRIPT</h5>
              <p className="text-center">95.88%</p>
              <span class="bar">
                <span class="javascript"></span>
              </span>

              <h5 class="card-title fw-bold text-center mt-5">PHP</h5>
              <p className="text-center">100%</p>
              <span class="bar">
                <span class="php"></span>
              </span>
            </div>
          </div>
          </div>
          
    </>
    
  );
};

export default About;
