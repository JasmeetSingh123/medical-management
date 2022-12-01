import React from 'react'
import { Link } from 'react-router-dom';
import bootstrap from '../assets/css/bootstrap.css';
import maicons from '../assets/css/maicons.css';
import theme from '../assets/css/theme.css';
import pharmacyImage from '../assets/images/pharmacy.png';

function LandingPage() {
  return (
    <>
  <div className="back-to-top"></div>

  <header>
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/"><span className="text-primary">Med</span>-Ma</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupport">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="btn btn-primary ml-lg-3" to="/login">Login</Link>
              <Link className="btn btn-primary ml-lg-3" to="/register">Register</Link>
              <Link className="btn btn-primary ml-lg-3" to="/admin-register">Admin Register</Link>
              <Link className="btn btn-primary ml-lg-3" to="/admin-login">Admin Login</Link>
            </li>
          </ul>
        </div> 
      </div> 
    </nav>
  </header>

  <div className="page-hero bg-image overlay-dark" style={{backgroundImage: `url(../assets/img/bg_image_1.jpg)`}}>
    <div className="hero-section">
      <div className="container text-center wow zoomIn">
        <span className="subhead">Let's make your life happier</span>
        <h1 className="display-4">Healthy Living</h1>
        <Link to="/register" className="btn btn-primary">Let's Consult</Link>
      </div>
    </div>
  </div>


  <div className="bg-light">
    <div className="page-section py-3 mt-md-n5 custom-index">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 py-3 py-md-0">
            <div className="card-service wow fadeInUp">
              <div className="circle-shape bg-secondary text-white">
              </div>
              <p><span>Search medicine</span> in your Locality</p>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card-service wow fadeInUp">
              <div className="circle-shape bg-primary text-white">
              </div>
              <p><span>Med</span>-Ma Protection</p>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card-service wow fadeInUp">
              <div className="circle-shape bg-accent text-white">
              </div>
              <p><span>Med</span>-Ma Pharmacy</p>
            </div>
          </div>
        </div>
      </div>
    </div> 

    <div className="page-section pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3 wow fadeInUp">
            <h1>Welcome to Your Health <br /> Center</h1>
            <p className="text-grey mb-4">Search medicine in your locality with our new featured webapp </p>
            <a href="about.html" className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
            <div className="img-place custom-img-1">
              <img src={pharmacyImage} alt=""  />
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div> 

  

  <div className="page-section banner-home bg-image" style={{backgroundImage: `url(../assets/img/banner-pattern.svg)`}}>
    <div className="container py-5 py-lg-0">
      <div className="row align-items-center">
        <div className="col-lg-4 wow zoomIn">
          <div className="img-banner d-none d-lg-block">
            <img src="../assets/img/mobile_app.png" alt="" />
          </div>
        </div>
        <div className="col-lg-8 wow fadeInRight">
          <h1 className="font-weight-normal mb-3">Get easy access of all features using Med-Ma Application</h1>
        </div>
      </div>
    </div>
  </div> 

  <footer className="page-footer">
    <div className="container">
      <div className="row px-md-3">
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>Company</h5>
          <ul className="footer-menu">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Career</a></li>
            <li><a href="/">Editorial Team</a></li>
            <li><a href="/">Protection</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>More</h5>
          <ul className="footer-menu">
            <li><a href="/">Terms and Condition</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Advertise</a></li>
            <li><a href="/">Join as Pharmacy</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>Our partner</h5>
          <ul className="footer-menu">
            <li><a href="/">One-Fitness</a></li>
            <li><a href="/">One-Drugs</a></li>
            <li><a href="/">One-Live</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>Contact</h5>
          <p className="footer-link mt-2"></p>
          <a href="/" className="footer-link">7893561965</a>
          <a href="/" className="footer-link">med-ma@temporary.net</a>
        </div>
      </div>

      </div>
  </footer>
    </>
  )
}

export default LandingPage
