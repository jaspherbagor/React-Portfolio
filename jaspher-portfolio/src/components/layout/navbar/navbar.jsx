import React from 'react';
import '../../css/navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg px-md-4 px-sm-4 px-2 py-1 position-fixed container-fluid">
        <div className="container-fluid">
          <a className="navbar-brand fs-2 fw-bolder text-white" href="/">PORT<span>FOLIO</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3 fs-5">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item me-3 fs-5">
                <a className="nav-link text-white" href="#about">About</a>
              </li>
              <li className="nav-item me-3 fs-5">
                <a className="nav-link text-white" href="#projects">Projects</a>
              </li>
              <li className="nav-item me-3 fs-5">
                <a className="nav-link text-white" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar