import React from "react";
import "../css/home.css";
import { useState } from "react";
const Home = () => {
  const [users, setUser] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  let name, value;

  const url =
    "https://portfolio-contact-3d35c-default-rtdb.firebaseio.com/Message.json";

  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...users, [name]: value });
  };

  const [submitted, setSubmitted] = useState(false);

  const showToast = (label, message, color, border, background) => {
    const toastLive = document.getElementById('liveToast');
    const toastLabel = document.getElementById('toastLabel');
    const toastMessage = document.getElementById('toastMessage');
    const toastHeader = document.getElementById('toastHeader');
    const toast = new window.bootstrap.Toast(toastLive);
  
    toastLabel.innerText = label;
    toastLabel.style.color = "#FFFFFF";
    toastMessage.innerText = message;
    toastMessage.style.color = color;
    toastLive.style.border = `2.5px solid ${border}`;
    toastHeader.style.background = background;
    toast.show();
  };
  
  const sendData = async (e) => {
    e.preventDefault();
  
    if (!users.Name || !users.Email || !users.Message) {
      showToast("OPS!!", "Please Fill All The Required Information!", "red", "red", "#8d0000");
      return;
    }
  
    const { Name, Email, Message } = users;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: users.Name,
        Email: users.Email,
        Message: users.Message,
      }),
    };
  
    try {
      const res = await fetch(url, options);
      console.log(res);
  
      if (res.ok) {
        setUser({
          Name: "",
          Email: "",
          Message: "",
        });
        showToast("SUCCESS", "Your Message Has Been Sent", "#000000", "#fca311", "#14213d");
        setSubmitted(true);
      } else {
        showToast("ERROR", "An Error Occurred", "red", "red", "red");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("ERROR", "An Error Occurred While Sending the Message", "red", "red", "red");
    }
  };
  

  return (
    <div className="content">
      <section className="hero-section container-fluid px-md-4 px-sm-4 px-2 py-5 text-white">
        <div className="col-md-11 col-12 align-items-center justify-content-center container d-flex">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="container pt-5">
                <h2>Hello! </h2>
                <h1 className="fw-medium display-4">
                  I'm <span>Jaspher Bagor</span>
                </h1>
                <h3 className="fw-medium mt-4 fw-medium">A Full-Stack Web Developer</h3>
                <h4 className="fw-medium mt-3 mb-4">
                  Passionate about crafting innovative web solutions.
                </h4>
                <a href="#contactMe">
                  <button className="btn btn-warning fw-medium fs-5 px-3 py-2 hero-btn">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center pt-5">
              <img
                src="images/hero_image.svg"
                alt="hero-image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="container-fluid about-section px-md-4 px-sm-4 px-2 py-5 text-white"
        id="about"
      >
        <h2 className="fw-bolder text-center my-5">
          <span>ABOUT</span> ME
        </h2>
        <div className="container d-flex justify-content-center align-items-center">
          <img
            src="../images/about-img.jpg"
            alt="profile-image"
            className="img-fluid about-img"
          />
        </div>
        <div className="container align-items-center justify-content-center col-md-10 col-sm-10 col-12 text-white">
          <h3 className="mt-5 text-center about-description">
            I am a Philippine-based full-stack web developer with a{" "}
            <span>
              strong passion for creating dynamic and user-friendly
              applications.
            </span>
          </h3>
          <h5 className="text-center mt-4 about-description">
            My journey into web development started when I enrolled at KodeGo
            Full-Stack Web Development Bootcamp on August 30, 2023 and graduated
            in January 30, 2024. I specialize in HTML, CSS, JavaScript,
            Bootstrap, React, NodeJS, MySQL, PHP and Laravel , always eager to
            learn and adapt to new challenges.
          </h5>
        </div>
      </section>
      <section className="certificate-section container-fluid px-md-4 px-sm-4 px-2 py-5" id="certificates">
        <h2 className="text-center fw-bolder text-white mt-5">
          MY <span>CERTIFICATES</span>
        </h2>
        <div className="row mt-5">
          <div className="col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="../images/responsive-cert.png" alt="" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="text-center">Responsive Web Design Certification</h5>
                <div className="text-center mt-3">
                  <a href="https://www.freecodecamp.org/certification/jaspherbagor/responsive-web-design" target="_blank">
                    <button className="btn btn-primary view-cert-btn py-2"><i className="bi bi-zoom-in fs-5"></i> View Certificate</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
              <img src="../images/js-cert.png" alt="" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="text-center">Legacy JavaScript Algorithm and Data Structures Certification</h5>
                <div className="text-center mt-3">
                  <a href="https://www.freecodecamp.org/certification/jaspherbagor/javascript-algorithms-and-data-structures" target="_blank">
                    <button className="btn btn-primary view-cert-btn py-2"><i className="bi bi-zoom-in fs-5"></i> View Certificate</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
              <img src="../images/front-end-cert.png" alt="" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="text-center">Front-end Development Libraries Certification</h5>
                <div className="text-center mt-3">
                  <a href="https://www.freecodecamp.org/certification/jaspherbagor/front-end-development-libraries" target="_blank">
                    <button className="btn btn-primary view-cert-btn py-2"><i className="bi bi-zoom-in fs-5"></i> View Certificate</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
              <img src="../images/kodego-cert.png" alt="" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="text-center">KodeGo Full-Stack Web Development Certification</h5>
                <div className="text-center mt-3">
                  <a href="https://github.com/jaspherbagor/React-Portfolio/blob/main/jaspher-portfolio/public/images/Jaspher_Bagor_Certificate.pdf" target="_blank">
                    <button className="btn btn-primary view-cert-btn py-2"><i className="bi bi-zoom-in fs-5"></i> View Certificate</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project-section container-fluid px-md-4 px-sm-4 px-2 py-5" id="projects">
        <h2 className="text-center fw-bolder text-white mt-5">
          MY <span>PROJECTS</span>
        </h2>
        <div className="row mt-5 px-2">
          <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
            <div className="card mb-4">
              <img
                src="../images/kinabuhing-turnero.png"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Kinabuhing Turnero</h5>
                <p className="card-text">
                  Kinabuhing Turnero is my Mini-Project 1 for KodeGo's
                  Full-Stack Web Development Bootcamp. This is a multi-page
                  responsive website for a machine shop that offers services
                  such as metal fabrication, welding, machining and more.
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://jaspherbagor.github.io/Kinabuhing-Turnero/" target="_blank" className="btn btn-success live-preview-btn me-4">
                    <i className="bi bi-zoom-in fs-5"></i> Live Preview
                  </a>
                  <a href="https://github.com/jaspherbagor/Kinabuhing-Turnero" target="_blank" className="btn btn-secondary github-code-btn">
                    <i className="bi bi-github fs-5"></i> Github Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
            <div className="card mb-4">
              <img
                src="../images/spark-source-central.png"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">SparkSource Central</h5>
                <p className="card-text">
                  SparkSource Central is my Mini-Project 2 for KodeGo's
                  Full-Stack Web Development Bootcamp. This is an API-driven
                  mini-web application, an ecommerce shop that sells various
                  electrical tools, materials, and equipments.
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://spark-source-central.vercel.app/" target="_blank" className="btn btn-success live-preview-btn me-4">
                    <i className="bi bi-zoom-in fs-5"></i> Live Preview
                  </a>
                  <a href="https://github.com/jaspherbagor/SparkSourceCentral" target="_blank" className="btn btn-secondary github-code-btn">
                    <i className="bi bi-github fs-5"></i> Github Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
            <div className="card mb-4">
              <img
                src="../images/splenr.png"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Splenr</h5>
                <p className="card-text">
                  Splenr is my Capstone Project for KodeGo Full-Stack Web
                  Development Bootcamp. This is an electrician job platform that
                  enables the job seekers to apply a job and employers to post
                  job, subscribe to a plan and manage applicants.
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://splenr.tech/" target="_blank" className="btn btn-success live-preview-btn me-4">
                    <i className="bi bi-zoom-in fs-5"></i> Live Preview
                  </a>
                  <a href="https://github.com/jaspherbagor/SPLENR" target="_blank" className="btn btn-secondary github-code-btn">
                    <i className="bi bi-github fs-5"></i> Github Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
            <div className="card mb-4">
              <img
                src="../images/lsh.png"
                className="card-img-top img-fluid"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-center">Labason Safe Haven</h5>
                <p className="card-text">
                 Labason Safe Haven is a booking platform that enables the user to book hotels, boarding houses and apartments. Establishments can create an account, post room vacancies and manage  customer bookings. Super admin can approve user accounts as well as the establishments registered. 
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://github.com/jaspherbagor/LSH-V6" target="_blank" className="btn btn-success live-preview-btn me-4">
                    <i className="bi bi-zoom-in fs-5"></i> Live Preview
                  </a>
                  <a href="https://github.com/jaspherbagor/LSH-V6" target="_blank" className="btn btn-secondary github-code-btn">
                    <i className="bi bi-github fs-5"></i> Github Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
            <div className="card mb-4">
              <img
                src="../images/pclu-qms.png"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">PCLU QMS</h5>
                <p className="card-text">
                  PCLU QMS is a queue management system for Polytechnic College of La Union(PCLU) students. I have added crucial functionalities such as password reset using email authenthication, display of advertisements and database backup. Additionally, I have improved the overall user interface of the web system.
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://github.com/jaspherbagor/Queue_Management_System" target="_blank" className="btn btn-success live-preview-btn me-4">
                    <i className="bi bi-zoom-in fs-5"></i> Live Preview
                  </a>
                  <a href="https://github.com/jaspherbagor/Queue_Management_System" target="_blank" className="btn btn-secondary github-code-btn">
                    <i className="bi bi-github fs-5"></i> Github Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section container-fluid px-md-4 px-sm-4 px-2 py-5" id="contactMe">
        <h2 className="text-center fw-bolder mt-5 text-white">
          <span>CONTACT</span> ME
        </h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="container">
              <h5 className="text-start">
                <a
                  href="mailto:jaspherbagor0357@gmail.com"
                  target="_blank"
                  className="text-decoration-none text-white contact-email"
                >
                  <i className="bi bi-envelope fs-5"></i> jaspherbagor0357@gmail.com
                </a>
              </h5>
              <h5 className="text-start">
                <a
                  href="tel:09169675327"
                  target="_blank"
                  className="text-decoration-none text-white contact-phone"
                >
                  <i className="bi bi-telephone fs-5"></i> 0916-967-5327
                </a>
              </h5>
              <div className="d-flex align-items-center justify-content-start mt-5">
                <a
                  href="https://www.facebook.com/jas.bagor/"
                  target="_blank"
                  className="text-decoration-none text-white social-icon me-4"
                >
                  <i className="bi bi-facebook fs-2"></i>
                </a>
                <a
                  href="https://github.com/jaspherbagor"
                  target="_blank"
                  className="text-decoration-none text-white social-icon me-4"
                >
                  <i className="bi bi-github fs-2"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jaspher-bagor-56274326a/"
                  target="_blank"
                  className="text-decoration-none text-white social-icon me-4"
                >
                  <i className="bi bi-linkedin fs-2"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@jasbgr"
                  target="_blank"
                  className="text-decoration-none text-white social-icon"
                >
                  <i className="bi bi-tiktok fs-2"></i>
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-start mt-5">
                <a
                  href="https://www.canva.com/design/DAGd8F7at7Q/SZJeaHGPp7LJ3-CKwTU0Zw/view?utm_content=DAGd8F7at7Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h86fa2a701f"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <button
                    type="button"
                    className="btn btn-success view-resume px-3 py-2 fw-semibold fs-5"
                  >
                    View Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="container">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    value={users.Name}
                    onChange={data}
                    className="form-control"
                    id="name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={users.Email}
                    onChange={data}
                    name="Email"
                    id="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white">
                    Message
                  </label>
                  <textarea
                    name="Message"
                    type="text"
                    id="message"
                    value={users.Message}
                    onChange={data}
                    className="w-100 form-control"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-success submit-message px-3 py-2 fw-semibold fs-5 mt-3"
                  onClick={sendData}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="toast-container position-fixed start-50 translate-middle p-2">
          <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header" id="toastHeader">
                  <strong className="me-auto" id="toastLabel"></strong>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div className="toast-body fw-medium" id="toastMessage">
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
