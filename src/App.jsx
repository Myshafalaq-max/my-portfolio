import { useState } from "react";
import "./App.css";

function App() {
  const [showCertificates, setShowCertificates] = useState(false);

  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          MYSHA<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-content">
          <p className="hero-label">SOFTWARE DEVELOPER</p>

          <h1>
            Hi, I'm <span>Mysha.</span>
          </h1>

          <h2>Java Full Stack Developer</h2>

          <p className="hero-description">
            I build full-stack applications and explore innovative solutions
            across AI, IoT, and software development.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work →
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow-circle"></div>

          <div className="profile-card">
            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-content">
              <p>
                <span className="terminal-symbol">$</span> whoami
              </p>

              <h3>Mysha Falaq.E</h3>

              <p>
                <span className="terminal-symbol">$</span> role
              </p>

              <h4>Java Full Stack Developer</h4>

              <p>
                <span className="terminal-symbol">$</span> status
              </p>

              <p className="status">
                ● Open to opportunities
              </p>
            </div>
          </div>
        </div>

      </section>


      {/* About Section */}
      <section id="about" className="about">

        <div className="section-heading">
          <p>01 / ABOUT</p>

          <h2>
            Turning ideas into <span>working solutions.</span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            I'm a B.Tech graduate in Electronics & Communication Engineering
            with hands-on experience in Java, SQL, web technologies, AI, IoT,
            and software development.
          </p>

          <p>
            I enjoy building practical applications, solving technical
            problems, and continuously learning new technologies across
            software development and emerging engineering domains.
          </p>
        </div>

      </section>


      {/* Skills Section */}
      <section id="skills" className="skills-section">

        <div className="section-heading">
          <p>02 / SKILLS</p>

          <h2>
            Technologies I <span>work with.</span>
          </h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <span className="skill-number">01</span>
            <h3>Java</h3>
            <p>Core Java, OOP, Collections and problem solving.</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">02</span>
            <h3>Spring Boot</h3>
            <p>REST APIs, Spring Security, JPA and backend development.</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">03</span>
            <h3>SQL / MySQL</h3>
            <p>Database design, queries, joins and data management.</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">04</span>
            <h3>React</h3>
            <p>Component-based frontend development with React and Vite.</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">05</span>
            <h3>Web Technologies</h3>
            <p>HTML, CSS, JavaScript and responsive web development.</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">06</span>
            <h3>DevOps</h3>
            <p>Git, GitHub, Linux, Docker and Jenkins CI/CD.</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">07</span>
            <h3>AWS</h3>
            <p>Cloud fundamentals and application deployment using EC2.</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">08</span>
            <h3>AI & IoT</h3>
            <p>Python, YOLO, OpenCV, ESP32 and IoT-based solutions.</p>
          </div>

        </div>

      </section>


      {/* Projects Section */}
      <section id="projects" className="projects-section">

        <div className="section-heading">
          <p>03 / PROJECTS</p>

          <h2>
            Things I've <span>built.</span>
          </h2>
        </div>

        <div className="projects-grid">

          {/* Project 1 */}
          <article className="project-card">
            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-type">FULL STACK</span>
            </div>

            <h3>ShopEasy</h3>

            <p className="project-subtitle">
              Full Stack E-Commerce Platform
            </p>

            <p className="project-description">
              A full-stack e-commerce application with product and category
              management, user authentication, cart, checkout, orders and
              an admin panel.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>MySQL</span>
              <span>JWT</span>
            </div>
          </article>


          {/* Project 2 */}
          <article className="project-card">
            <div className="project-top">
              <span className="project-number">02</span>
              <span className="project-type">DEVOPS</span>
            </div>

            <h3>React App CI/CD Deployment</h3>

            <p className="project-subtitle">
              Containerized CI/CD Deployment
            </p>

            <p className="project-description">
              A React application deployed through a CI/CD pipeline using
              GitHub, Jenkins and Docker, with deployment configured on an
              AWS EC2 environment.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Docker</span>
              <span>Jenkins</span>
              <span>GitHub</span>
              <span>AWS</span>
            </div>
          </article>


          {/* Project 3 */}
          <article className="project-card">
            <div className="project-top">
              <span className="project-number">03</span>
              <span className="project-type">AI / IOT</span>
            </div>

            <h3>Animal Intrusion Detection</h3>

            <p className="project-subtitle">
              AI-Assisted Smart Agriculture System
            </p>

            <p className="project-description">
              An AI-assisted system designed to detect animal intrusion in
              agricultural areas using computer vision and edge hardware.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>YOLO</span>
              <span>OpenCV</span>
              <span>Raspberry Pi</span>
              <span>IoT</span>
            </div>
          </article>


          {/* Project 4 */}
          <article className="project-card">
            <div className="project-top">
              <span className="project-number">04</span>
              <span className="project-type">IOT</span>
            </div>

            <h3>Smart Shoe</h3>

            <p className="project-subtitle">
              Foot Pressure Tracker
            </p>

            <p className="project-description">
              An IoT-based smart shoe project that monitors foot-pressure
              data using pressure sensors and an ESP32, with data stored
              using Firebase.
            </p>

            <div className="project-tech">
              <span>ESP32</span>
              <span>Pressure Sensors</span>
              <span>Firebase</span>
              <span>IoT</span>
            </div>
          </article>

        </div>

      </section>


      {/* Certifications Section */}
      <section id="certifications" className="certifications-section">

        <div className="section-heading">
          <p>04 / CERTIFICATIONS</p>

          <h2>
            Continuous learning, <span>documented.</span>
          </h2>
        </div>

        <div className="certifications-grid">

          {/* Java Full Stack Certificates */}
          <div className="certification-card">

            <div className="certification-top">
              <span className="certification-number">01</span>
              <span className="certification-type">TRAINING</span>
            </div>

            <h3>Java Full Stack Development</h3>

            <p className="certification-provider">
              Besant Technologies
            </p>

            <p className="certification-description">
              Completed training across Java, web development, SQL,
              React and Linux as part of my full stack development
              learning journey.
            </p>

            <button
              className="view-certificates-btn"
              onClick={() => setShowCertificates(!showCertificates)}
            >
              {showCertificates
                ? "Hide Certificates ↑"
                : "View Certificates (5) →"}
            </button>

            {showCertificates && (
              <div className="certificate-list">

                <a
                  href="/Certificates/Java_certificate.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Java Certificate →
                </a>

                <a
                  href="/Certificates/Web_Designing_certificate.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web Designing Certificate →
                </a>

                <a
                  href="/Certificates/Sql_certificate.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  SQL Certificate →
                </a>

                <a
                  href="/Certificates/Reactjs_certificate.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  React JS Certificate →
                </a>

                <a
                  href="/Certificates/Linux_certificate.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linux Certificate →
                </a>

              </div>
            )}

          </div>


          {/* IBM Certificate */}
          <div className="certification-card">

            <div className="certification-top">
              <span className="certification-number">02</span>
              <span className="certification-type">CERTIFICATE</span>
            </div>

            <h3>AI Fundamentals</h3>

            <p className="certification-provider">
              IBM SkillsBuild
            </p>

            <p className="certification-description">
              Completed foundational learning in artificial intelligence,
              including core AI concepts and practical applications.
            </p>

            <a
              href="/Certificates/IBM_AI_Fundamentals_certificate.jpeg"
              target="_blank"
              rel="noreferrer"
              className="view-certificates-btn"
            >
              View Certificate →
            </a>

          </div>

        </div>

      </section>


      {/* Contact Section */}
      <section id="contact" className="contact-section">

        <div className="section-heading">
          <p>05 / CONTACT</p>

          <h2>
            Let's build something <span>useful.</span>
          </h2>
        </div>

        <div className="contact-content">

          <p>
            I'm currently open to entry-level opportunities in Java,
            full-stack development and software engineering.
          </p>

          <div className="contact-card">

            <p className="contact-card-label">
              GET IN TOUCH
            </p>

            <div className="contact-item">
              <span>EMAIL</span>

              <a href="mailto:myshafalaq@gmail.com">
                myshafalaq@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span>GITHUB</span>

              <a
                href="https://github.com/Myshafalaq-max"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
            </div>

            <div className="contact-item">
              <span>LINKEDIN</span>

              <a
                href="https://www.linkedin.com/in/myshafalaq"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn →
              </a>
            </div>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="footer">
        © 2026 Mysha Falaq.E · Built with React
      </footer>

    </div>
  );
}

export default App;