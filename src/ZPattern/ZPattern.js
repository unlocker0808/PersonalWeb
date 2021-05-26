import React, {Component} from 'react';

export default class ZPattern extends Component {
  render () {
    return (
      <div className="ZPattern">
        <nav className="navbar navbar-light navbar-expand bg-light navigation-clean">
          <div className="container">
            <a className="navbar-brand" href="#">Z-Pattern</a>
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
            />
            <div className="collapse navbar-collapse" id="navcol-1">
              <a className="btn btn-primary ml-auto" role="button" href="#">
                Sign In
              </a>
            </div>
          </div>
        </nav>
        <header
          className="text-center text-white masthead"
          style={{
            background: 'url("img/bg-masthead.jpg")no-repeat center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">
                  Build a landing page for your business or project and generate more leads!
                </h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        placeholder="Enter your email..."
                      />
                    </div>
                    <div className="col-12 col-md-3">
                      <button
                        className="btn btn-primary btn-block btn-lg"
                        type="submit"
                      >
                        Sign up!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
        <section className="text-center bg-light features-icons">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                  <div className="d-flex features-icons-icon">
                    <i
                      className="fa fa-desktop m-auto text-primary"
                      data-bss-hover-animate="pulse"
                    />
                  </div>
                  <h3>Fully Responsive</h3>
                  <p className="lead mb-0">
                    This theme will look great on any device, no matter the size!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                  <div className="d-flex features-icons-icon">
                    <i
                      className="fa fa-diamond m-auto text-primary"
                      data-bss-hover-animate="pulse"
                    />
                  </div>
                  <h3>Bootstrap 4 Ready</h3>
                  <p className="lead mb-0">
                    Featuring the latest build of the new Bootstrap 4 framework!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                  <div className="d-flex features-icons-icon">
                    <i
                      className="fa fa-check m-auto text-primary"
                      data-bss-hover-animate="pulse"
                    />
                  </div>
                  <h3>Easy to Use</h3>
                  <p className="lead mb-0">
                    Ready to use with your own content, or customize the source files!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="showcase">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div
                className="col-lg-6 text-white order-lg-2 showcase-img"
                style={{backgroundImage: 'url("img/bg-showcase-1.jpg")'}}
              >
                <span />
              </div>
              <div className="col-lg-6 my-auto order-lg-1 showcase-text">
                <h2>Fully Responsive Design</h2>
                <p className="lead mb-0">
                  When you use a theme created with Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-6 text-white showcase-img"
                style={{backgroundImage: 'url("img/bg-showcase-2.jpg")'}}
              >
                <span />
              </div>
              <div className="col-lg-6 my-auto order-lg-1 showcase-text">
                <h2>Updated For Bootstrap 4</h2>
                <p className="lead mb-0">
                  Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes are now using Bootstrap 4!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center bg-light testimonials">
          <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="mx-auto testimonial-item mb-5 mb-lg-0">
                  <img
                    className="rounded-circle img-fluid mb-3"
                    src="img/testimonials-1.jpg"
                  />
                  <h5>Margaret E.</h5>
                  <p className="font-weight-light mb-0">
                    "This is fantastic! Thanks so much guys!"
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mx-auto testimonial-item mb-5 mb-lg-0">
                  <img
                    className="rounded-circle img-fluid mb-3"
                    src="img/testimonials-2.jpg"
                  />
                  <h5>Fred S.</h5>
                  <p className="font-weight-light mb-0">
                    "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mx-auto testimonial-item mb-5 mb-lg-0">
                  <img
                    className="rounded-circle img-fluid mb-3"
                    src="img/testimonials-3.jpg"
                  />
                  <h5>Sarah W.</h5>
                  <p className="font-weight-light mb-0">
                    "Thanks so much for making these free resources available to us!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <footer className="bg-light footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center text-lg-left my-auto h-100">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item"><a href="#">About</a></li>
                  <li className="list-inline-item"><span>⋅</span></li>
                  <li className="list-inline-item"><a href="#">Contact</a></li>
                  <li className="list-inline-item"><span>⋅</span></li>
                  <li className="list-inline-item">
                    <a href="#">Terms of &nbsp;Use</a>
                  </li>
                  <li className="list-inline-item"><span>⋅</span></li>
                  <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">
                  © Brand 2021. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 text-center text-lg-right my-auto h-100">
                <ul className="list-inline mb-0">
                <li className="list-inline-item">
                    <a href="#"><i className="fa fa-facebook fa-2x fa-fw" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><i className="fa fa-twitter fa-2x fa-fw" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><i className="fa fa-instagram fa-2x fa-fw" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
