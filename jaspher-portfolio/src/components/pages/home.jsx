import React from "react";
import "../css/home.css";
const Home = () => {
  return (
    <>
      <section className="hero-section container-fluid px-md-4 px-sm-4 px-2 py-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="container pt-5">
              <h3>Hello! </h3>
              <h1 className="fw-bolder display-3">
                I'm <span className="text-warning">Jaspher Bagor</span>
              </h1>
              <h3 className="fw-semibold mt-4">A Full-Stack Web Developer</h3>
              <h4 className="fw-semibold mt-3 mb-4">
                Passionate about crafting innovative web solutions.
              </h4>
              <button className="btn btn-warning fw-semibold px-2 py-3 hero-btn">
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
        className="container-fluid about-section px-md-4 px-sm-4 px-2 py-5 bg-secondary"
        id="about"
      >
        <h2 className="fw-bolder text-white text-center my-5">
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
          <h3 className="mt-5 text-white text-center about-description">
            I am a Philippine-based full-stack web developer with a{" "}
            <span>
              strong passion for creating dynamic and user-friendly
              applications.
            </span>
          </h3>
          <h4 className="text-center text-white mt-4 about-description">
            My journey into web development started when I enrolled at KodeGo
            Full-Stack Web Development Bootcamp on August 30, 2023 and graduated
            in January 30, 2024. I specialize in HTML, CSS, JavaScript,
            Bootstrap, React, NodeJS, MySQL, PHP and Laravel , always eager to
            learn and adapt to new challenges.
          </h4>
        </div>
      </section>
      <section className="portfolio-section container-fluid px-md-4 px-sm-4 px-2 py-5 bg-primary">
        <h2 className="text-center fw-bolder text-white" id="projects">
          MY <span>PROJECTS</span>
        </h2>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
            <div class="card">
              <img src="../images/kinabuhing-turnero.png" class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="#" class="btn btn-primary me-4">
                    Live Preview
                  </a>
                  <a href="#" class="btn btn-secondary">
                    Github Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
            <div class="card">
              <img src="../images/spark-source-central.png" class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="#" class="btn btn-primary me-4">
                    Live Preview
                  </a>
                  <a href="#" class="btn btn-secondary">
                    Github Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
            <div class="card">
              <img src="../images/splenr.png" class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">Card title</h5>
                <p class="card-text">
                  Sample Card text
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="#" class="btn btn-primary me-4">
                    Live Preview
                  </a>
                  <a href="#" class="btn btn-secondary">
                    Github Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
