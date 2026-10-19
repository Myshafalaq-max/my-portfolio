import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const [showCertificates, setShowCertificates] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const [formData, setFormData] = useState({
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
});

const [sending, setSending] = useState(false);
const [formStatus, setFormStatus] = useState({
  type: "",
  text: "",
});


const handleFormChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);
  setFormStatus({ type: "", text: "" });

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    setFormStatus({
      type: "success",
      text: "Message sent successfully! Thank you for reaching out.",
    });

    setFormData({
      from_name: "",
      from_email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS error:", error);

    setFormStatus({
      type: "error",
      text: "Sorry, your message could not be sent. Please try again or email me directly.",
    });
  } finally {
    setSending(false);
  }
};

return (

    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          MYSHA<span>.</span>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#certifications" onClick={closeMenu}>Certificates</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
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
        <div className="about-intro">
          <div className="section-heading">
            <p>01 / ABOUT</p>

            <h2>
              Turning ideas into <span>working solutions.</span>
            </h2>
          </div>

          <div className="about-photo">
            <img src="/mysha.png" alt="Mysha Falaq" />
          </div>
        </div>

        <div className="about-cards">
          <article className="about-card">
            <h3>Who I Am</h3>
            <p>
              I'm a B.Tech graduate in Electronics & Communication
              Engineering with an interest in software development,
              problem-solving, and learning new technologies.
            </p>
          </article>

          <article className="about-card">
            <h3>What I Do</h3>
            <p>
              I build practical applications using Java, Spring Boot,
              React, SQL, and web technologies, while exploring AI,
              IoT, and DevOps tools.
            </p>
          </article>

          <article className="about-card">
            <h3>My Goal</h3>
            <p>
              I'm looking forward to starting my career in software
              development, strengthening my technical skills, and
              contributing to useful, user-friendly applications.
            </p>
          </article>
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
          <article className="skill-card">
            <span className="skill-number">01</span>
            <h3>Java</h3>
            <p>Core Java, OOP, Collections and DSA.</p>
          </article>

          <article className="skill-card">
            <span className="skill-number">02</span>
            <h3>Backend Development</h3>
            <p>Spring Boot, REST APIs, JPA and Spring Security.</p>
          </article>

          <article className="skill-card">
            <span className="skill-number">03</span>
            <h3>Frontend Development</h3>
            <p>React, JavaScript, HTML, CSS and Bootstrap.</p>
          </article>

          <article className="skill-card">
            <span className="skill-number">04</span>
            <h3>Database</h3>
            <p>SQL, MySQL, queries, joins and CRUD operations.</p>
          </article>

          <article className="skill-card">
            <span className="skill-number">05</span>
            <h3>DevOps & Cloud</h3>
            <p>Git, GitHub, Linux, Docker, Jenkins, AWS and EC2.</p>
          </article>

          <article className="skill-card">
            <span className="skill-number">06</span>
            <h3>AI & IoT</h3>
            <p>Python, YOLO, OpenCV, ESP32 and IoT solutions.</p>
          </article>
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

        {/* All four cards must stay inside this grid */}
        <div className="certifications-grid">

          {/* Certificate 01: Besant Technologies */}
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
              ReactJS, Linux and AWS as part of my full stack development
              learning journey.
            </p>

            <button
              className="view-certificates-btn"
              onClick={() => setShowCertificates(!showCertificates)}
            >
              {showCertificates
                ? "Hide Certificates ↑"
                : "View Certificates (6) →"}
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

                <a
                  href="/Certificates/AWS_certificate.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  AWS Certificate →
                </a>
              </div>
            )}
          </div>

          {/* Certificate 02: IBM */}
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

          {/* Certificate 03: Oracle */}
          <div className="certification-card">
            <div className="certification-top">
              <span className="certification-number">03</span>
              <span className="certification-type">CERTIFICATIONS</span>
            </div>

            <h3>Oracle Cloud Certifications</h3>

            <p className="certification-provider">
              Oracle
            </p>

            <p className="certification-description">
              Certified in Oracle Cloud Infrastructure fundamentals
              and AI foundations, covering cloud computing and
              foundational artificial intelligence concepts.
            </p>

            <div className="certificate-list">
              <a
                href="/Certificates/oracle-cloud-foundations.pdf"
                target="_blank"
                rel="noreferrer"
                className="view-certificates-btn"
              >
                View OCI Foundations Certificate →
              </a>

              <a
                href="/Certificates/oracle-ai-foundations.pdf"
                target="_blank"
                rel="noreferrer"
                className="view-certificates-btn"
              >
                View OCI AI Foundations Certificate →
              </a>
            </div>
          </div>

          {/* Certificate 04: HPE */}
          <div className="certification-card">
            <div className="certification-top">
              <span className="certification-number">04</span>
              <span className="certification-type">JOB SIMULATION</span>
            </div>

            <h3>Software Engineering Job Simulation</h3>

            <p className="certification-provider">
              Hewlett Packard Enterprise (HPE)
            </p>

            <p className="certification-description">
              Completed a practical software engineering simulation
              focused on backend development and software engineering tasks.
            </p>

            <a
              href="/Certificates/hpe-software-engineering.pdf"
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
        <div className="contact-layout">
          {/* Left Column */}
          <div className="contact-left">
            <div className="section-heading">
              <p>05 / CONTACT</p>
              <h2>
                Let's build something <span>useful.</span>
              </h2>
            </div>

            <div className="contact-card">
              <p className="contact-card-label">GET IN TOUCH</p>

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

          {/* Right Column */}
          <div className="contact-right">
            <p className="contact-intro">
              I'm currently open to entry-level opportunities in Java,
              full-stack development and software engineering.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="from_name">Full Name</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.from_name}
                  onChange={handleFormChange}
                  required
                  maxLength={100}
                />
              </div>

              <div className="form-field">
                <label htmlFor="from_email">Email Address</label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.from_email}
                  onChange={handleFormChange}
                  required
                  maxLength={254}
                />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Job opportunity / Project inquiry"
                  value={formData.subject}
                  onChange={handleFormChange}
                  required
                  maxLength={150}
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={5}
                  maxLength={5000}
                />
              </div>

              <button
                className="contact-submit-btn"
                type="submit"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message →"}
              </button>

              {formStatus.text && (
                <p
                  className={`form-status ${formStatus.type}`}
                  role="status"
                  aria-live="polite"
                >
                  {formStatus.text}
                </p>
              )}
            </form>
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
