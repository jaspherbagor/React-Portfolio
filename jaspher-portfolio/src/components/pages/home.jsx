import React from 'react'

const Home = () => {
  return (
    <>
        <section className="container-fluid px-md-4 px-sm-4 px-2 py-5">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="container">
                    <h3>Hello, I'm Jaspher</h3>
                    <h1 className="display-3 fw-bolder">FULL-STACK WEB DEVELOPER</h1>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="container">
                    <img src="images/hero_image.svg" alt="" />
                  </div>
                  
                </div>
            </div>
        </section>
    </>
  )
}

export default Home