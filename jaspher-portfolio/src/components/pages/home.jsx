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
    <>
      <section className="hero-section container-fluid px-md-4 px-sm-4 px-2 py-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="container pt-5">
              <h3>Hello! </h3>
              <h1 className="fw-bolder display-3">
                I'm <span>Jaspher Bagor</span>
              </h1>
              <h3 className="fw-semibold mt-4">A Full-Stack Web Developer</h3>
              <h4 className="fw-semibold mt-3 mb-4">
                Passionate about crafting innovative web solutions.
              </h4>
              <button className="btn btn-warning fw-semibold fs-5 px-4 py-3 hero-btn">
                Contact Me
              </button>
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
      </section>
      <section
        className="container-fluid about-section px-md-4 px-sm-4 px-2 py-5"
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
        <div className="container">
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
      <section className="project-section container-fluid px-md-4 px-sm-4 px-2 py-5">
        <h2 className="text-center fw-bolder text-white" id="projects">
          MY <span>PROJECTS</span>
        </h2>
        <div className="row mt-5">
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
                  <a href="#" className="btn btn-success me-4">
                    Live Preview
                  </a>
                  <a href="#" className="btn btn-secondary">
                    Github Code
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
                  <a href="#" className="btn btn-success me-4">
                    Live Preview
                  </a>
                  <a href="#" className="btn btn-secondary">
                    Github Code
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
                  <a href="#" className="btn btn-success me-4">
                    Live Preview
                  </a>
                  <a href="#" className="btn btn-secondary">
                    Github Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section container-fluid px-md-4 px-sm-4 px-2 py-5">
        <h2 className="text-center fw-bolder my-5 text-white">
          <span>CONTACT</span> ME
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="container">
              <h5 className="text-start">
                <a
                  href="mailto:jaspherbagor0357@gmail.com"
                  target="_blank"
                  className="text-decoration-none text-white contact-email"
                >
                  <i class="bi bi-envelope fs-5"></i> jaspherbagor0357@gmail.com
                </a>
              </h5>
              <h5 className="text-start">
                <a
                  href="tel:09169675327"
                  target="_blank"
                  className="text-decoration-none text-white contact-phone"
                >
                  <i class="bi bi-telephone fs-5"></i> 0916-967-5327
                </a>
              </h5>
              <div className="d-flex align-items-center justify-content-start mt-5">
                <a
                  href="https://www.facebook.com/jas.bagor/"
                  target="_blank"
                  className="text-decoration-none text-white social-icon me-4"
                >
                  <i class="bi bi-facebook fs-2"></i>
                </a>
                <a
                  href="https://github.com/jaspherbagor"
                  target="_blank"
                  className="text-decoration-none text-white social-icon me-4"
                >
                  <i class="bi bi-github fs-2"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jaspher-bagor-56274326a/"
                  target="_blank"
                  className="text-decoration-none text-white social-icon me-4"
                >
                  <i class="bi bi-linkedin fs-2"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@jasbgr"
                  target="_blank"
                  className="text-decoration-none text-white social-icon"
                >
                  <i class="bi bi-tiktok fs-2"></i>
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-start mt-5">
                <a
                  href="https://www.canva.com/design/DAF8QjW3hRg/NwvIAQRpx4FKiXQ1PkdqVg/view?utm_content=DAF8QjW3hRg&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <button
                    type="button"
                    className="btn btn-success view-resume px-2 py-3 fw-semibold"
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
                <div class="mb-3">
                  <label for="name" class="form-label text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    value={users.Name}
                    onChange={data}
                    class="form-control"
                    id="name"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    value={users.Email}
                    onChange={data}
                    name="Email"
                    id="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label text-white">
                    Message
                  </label>
                  <textarea
                    name="Message"
                    id="message"
                    value={users.Message}
                    onChange={data}
                    className="w-100 form-control"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="btn btn-success submit-message"
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
    </>
  );
};

export default Home;
