import React from 'react';
import '../css/home.css';
const Home = () => {
  return (
    <>
        <section className="hero-section container-fluid px-md-4 px-sm-4 px-2 py-5">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="container">
                <h3>Hello! </h3>
                <h1 className="fw-bolder display-3">I'm <span className="text-warning">Jaspher Bagor</span></h1>
                <h3 className="fw-bolder mt-4">A Full-Stack Web Developer</h3>
                <h4 className="fw-semibold mt-3 mb-4">Passionate about crafting innovative web solutions.</h4>                 
                <button className="btn btn-warning fw-semibold px-2 py-3 hero-btn">Contact Me</button>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src="images/hero_image.svg" alt="hero-image" className="img-fluid" />  
            </div>
          </div>
        </section>
        <section className="container-fluid about-section px-md-4 px-sm-4 px-2 py-5">
          <div className="row">
            <h2 className="fw-bolder text-center">ABOUT ME</h2>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src="" alt="" />
            </div>
            <div className="col-md-6">
              <h4 className="mt-5">I am a Philippine-based full-stack web developer with a strong passion for creating dynamic and user-friendly applications.</h4>
              <h5>My journey into web development started when I enrolled at KodeGo Full-Stack Web Development on August 30, 2023 and graduated at January 30, 2024. I specialize in HTML, CSS, JavaScript, Bootstrap, React, NodeJS, MySQL, PHP and Laravel , always eager to learn and adapt to new challenges.
</h5>
            </div>
          </div>
        </section>
    </>
  )
}

export default Home