import React from 'react';
import '../css/home.css';
const Home = () => {
  return (
    <>
        <section className="hero-section container-fluid px-md-4 px-sm-4 px-2 py-5">
          <div className="row">
              <div className="col-md-6 d-flex justify-content-end align-items-center">
                <div className="container">
                  <h3>Hello! </h3>
                  <h1 className="fw-bolder display-3">I'm <span className="text-warning">Jaspher Bagor</span></h1>
                  <h4 className="fw-bolder my-4">A Full-Stack Web Developer</h4>
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
          </div>
        </section>
    </>
  )
}

export default Home