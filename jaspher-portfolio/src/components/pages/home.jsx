import React from 'react';
import '../css/home.css';
const Home = () => {
  return (
    <>
        <section className="hero-section container-fluid px-md-4 px-sm-4 px-2 py-5">
          <div className="row">
              <div className="col-md-6 d-flex justify-content-end align-items-center">
                <div className="container">
                  <h3>Hello, I'm Jaspher Bagor</h3>
                  <h1 className="display-3 fw-bolder">FULL-STACK</h1>
                  <h1 className="display-3 fw-bolder">WEB DEVELOPER</h1>
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
              <h2 className="fw-bolder text-center">This is an about section</h2>
          </div>
        </section>
    </>
  )
}

export default Home