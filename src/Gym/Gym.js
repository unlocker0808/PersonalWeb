import React, {Component} from 'react';

export default class Gym extends Component {
  render () {
    return (
      <div>
        <div className="gym">
          <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
              <a href className="navbar-brand">
                <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">
                  Gymnast
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav ml-auto p-4 bg-secondary">
                  <a href="#" className="nav-item nav-link active">Home</a>
                  <a href="#about" className="nav-item nav-link">About Us</a>
                  <a href="#features" className="nav-item nav-link">
                    Our Features
                  </a>
                  <a href="#timetable" className="nav-item nav-link">
                    Timetable
                  </a>
                  <a href="#bmi" className="nav-item nav-link">BMI</a>
                  <a href="#team" className="nav-item nav-link">Team</a>
                  <a href="#contact" className="nav-item nav-link">Contact</a>
                </div>
              </div>
              
            </nav>
          </div>
          {/* Navbar End */}
          {/* Carousel Start */}
          <div className="container-fluid p-0">
            <div
              id="blog-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <h3 className="text-primary text-capitalize m-0">
                      Gym &amp; Fitness Center
                    </h3>
                    <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">
                      Best Gym In Town
                    </h2>
                    <a
                      href
                      className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5 pulse animated infinite"
                    >
                      Join Us Now
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <h3 className="text-primary text-capitalize m-0">
                      Gym &amp; Fitness Center
                    </h3>
                    <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">
                      Get Body In Shape
                    </h2>
                    <a
                      href
                      className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5 pulse animated infinite"
                    >
                      Join Us Now
                    </a>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#blog-carousel"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </a>
              <a
                className="carousel-control-next"
                href="#blog-carousel"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </a>
            </div>
          </div>
          {/* Carousel End */}
          {/* Gym Class Start */}
          <div className="container gym-class mb-5">
            <div className="row px-3">
              <div
                className="col-md-6 p-0"
                data-aos="slide-right"
                data-aos-duration={2000}
              >
                <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                  <i className="flaticon-six-pack" />
                  <h3 className="display-4 mb-3 text-white font-weight-bold">
                    Body Building
                  </h3>
                  <p>
                    Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                    sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                  </p>
                  <a
                    href
                    className="btn btn-lg btn-outline-light mt-4 px-4 pulse animated infinite"
                  >
                    Join Now
                  </a>
                </div>
              </div>
              <div
                className="col-md-6 p-0"
                data-aos="slide-left"
                data-aos-duration={2000}
              >
                <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                  <i className="flaticon-bodybuilding" />
                  <h3 className="display-4 mb-3 text-white font-weight-bold">
                    Muscle Building
                  </h3>
                  <p>
                    Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                    sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                  </p>
                  <a
                    href
                    className="btn btn-lg btn-outline-light mt-4 px-4 pulse animated infinite"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Gym Class End */}
          {/* About Start */}
          <div className="container py-5" id="about">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid mb-4 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-duration={2000}
                  src="img/about.jpg"
                  alt="Image"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="display-4 font-weight-bold mb-4">
                  10 Years Experience
                </h2>
                <p>
                  Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum
                </p>
                <div className="row py-2">
                  <div className="col-sm-6">
                    <i className="flaticon-barbell display-2 text-primary" />
                    <h4 className="font-weight-bold">Certified GYM Center</h4>
                    <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                  </div>
                  <div className="col-sm-6">
                    <i className="flaticon-medal display-2 text-primary" />
                    <h4 className="font-weight-bold">Award Winning</h4>
                    <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                  </div>
                </div>
                <a
                  href
                  className="btn btn-lg px-4 btn-outline-primary pulse animated infinite"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/* About End */}
          {/* Features Start */}
          <div id="features" style={{paddingTop: '3rem !important'}}>
            <div className="container-fluid my-5">
              <div className="row">
                <div
                  className="col-lg-4 p-0"
                  data-aos="slide-right"
                  data-aos-duration={2000}
                >
                  <div
                    className="d-flex align-items-center bg-secondary text-white px-5"
                    style={{minHeight: '300px'}}
                  >
                    <i className="flaticon-training display-3 text-primary mr-3" />
                    <div className>
                      <h2 className="text-white mb-3">Progression</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 p-0">
                  <div
                    className="d-flex align-items-center bg-primary text-white px-5"
                    style={{minHeight: '300px'}}
                    data-aos="fade-up"
                    data-aos-duration={2000}
                  >
                    <i className="flaticon-weightlifting display-3 text-secondary mr-3" />
                    <div className>
                      <h2 className="text-white mb-3">Workout</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 p-0">
                  <div
                    className="d-flex align-items-center bg-secondary text-white px-5"
                    style={{minHeight: '300px'}}
                    data-aos="slide-left"
                    data-aos-duration={2000}
                  >
                    <i className="flaticon-treadmill display-3 text-primary mr-3" />
                    <div className>
                      <h2 className="text-white mb-3">Nutrition</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Features End */}
            {/* GYM Feature Start */}
            <div className="container feature pt-5">
              <div className="d-flex flex-column text-center mb-5">
                <h4 className="text-primary font-weight-bold">
                  Why Choose Us?
                </h4>
                <h4 className="display-4 font-weight-bold">
                  Benifits of Joining Our GYM
                </h4>
              </div>
              <div className="row">
                <div className="col-md-6 mb-5">
                  <div className="row align-items-center">
                    <div className="col-sm-5">
                      <img
                        className="img-fluid mb-3 mb-sm-0"
                        src="img/feature-1.jpg"
                        alt="Image"
                      />
                      <i className="flaticon-barbell pulse animated infinite" />
                    </div>
                    <div className="col-sm-7">
                      <h4 className="font-weight-bold">Videos Instruction</h4>
                      <p>
                        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="row align-items-center">
                    <div className="col-sm-5">
                      <img
                        className="img-fluid mb-3 mb-sm-0"
                        src="img/feature-2.jpg"
                        alt="Image"
                      />
                      <i className="flaticon-training pulse animated infinite" />
                    </div>
                    <div className="col-sm-7">
                      <h4 className="font-weight-bold">Training Calendar</h4>
                      <p>
                        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="row align-items-center">
                    <div className="col-sm-5">
                      <img
                        className="img-fluid mb-3 mb-sm-0"
                        src="img/feature-3.jpg"
                        alt="Image"
                      />
                      <i className="flaticon-trends pulse animated infinite" />
                    </div>
                    <div className="col-sm-7">
                      <h4 className="font-weight-bold">Free Apps &amp; WiFi</h4>
                      <p>
                        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="row align-items-center">
                    <div className="col-sm-5">
                      <img
                        className="img-fluid mb-3 mb-sm-0"
                        src="img/feature-4.jpg"
                        alt="Image"
                      />
                      <i className="flaticon-support pulse animated infinite" />
                    </div>
                    <div className="col-sm-7">
                      <h4 className="font-weight-bold">Community Support</h4>
                      <p>
                        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GYM Feature End */}
          {/* Subscribe Start */}
          <div
            className="subscribe container-fluid my-5 py-5 text-center "
            data-aos="zoom-in"
            data-aos-duration={2000}
          >
            <h4 className="display-4 text-white font-weight-bold mt-5 mb-3">
              Subscribe Our Newsletter
            </h4>
            <p className="text-white mb-4">
              Subscribe and get Our latest article in your inbox
            </p>
            <form className="form-inline justify-content-center mb-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control-lg"
                  placeholder="Your Email"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary jello animated infinite"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Subscribe End */}
          {/* Class Timetable Start */}
          <div className="container gym-feature py-5" id="timetable">
            <div className="d-flex flex-column text-center mb-5">
              <h4 className="text-primary font-weight-bold">Class Timetable</h4>
              <h4 className="display-4 font-weight-bold">
                Working Hours and Class Time
              </h4>
            </div>
            <div className="tab-class">
              <ul className="nav nav-pills justify-content-center mb-4">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#class-all"
                  >
                    All Classes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#class-cardio"
                  >
                    Cardio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#class-crossfit"
                  >
                    Crossfit
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#class-powerlifting"
                  >
                    Powerlifting
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="class-all" className="container tab-pane p-0 active">
                  <div className="table-responsive">
                    <table className="table table-bordered table-lg m-0">
                      <thead className="bg-secondary text-white text-center">
                        <tr>
                          <th>Time</th>
                          <th>Monday</th>
                          <th>Tuesday</th>
                          <th>Wednesday</th>
                          <th>Thursday</th>
                          <th>Friday</th>
                          <th>Saturday</th>
                          <th>Sunday</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            6.00am - 8.00am
                          </th>
                          <td><h5>Cardio</h5>John Deo</td>
                          <td />
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                          <td />
                          <td><h5>Power Lifting</h5>James Alien</td>
                          <td />
                          <td><h5>Cardio</h5>John Deo</td>
                        </tr>
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            10.00am - 12.00am
                          </th>
                          <td />
                          <td><h5>Power Lifting</h5>James Alien</td>
                          <td />
                          <td><h5>Cardio</h5>John Deo</td>
                          <td />
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                          <td />
                        </tr>
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            5.00pm - 7.00pm
                          </th>
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                          <td />
                          <td><h5>Power Lifting</h5>James Alien</td>
                          <td />
                          <td><h5>Cardio</h5>John Deo</td>
                          <td />
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                        </tr>
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            7.00pm - 9.00pm
                          </th>
                          <td />
                          <td><h5>Cardio</h5>John Deo</td>
                          <td />
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                          <td />
                          <td><h5>Power Lifting</h5>James Alien</td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="class-cardio" className="container tab-pane fade p-0">
                  <div className="table-responsive">
                    <table className="table table-bordered table-lg m-0">
                      <thead className="bg-secondary text-white text-center">
                        <tr>
                          <th>Time</th>
                          <th>Monday</th>
                          <th>Tuesday</th>
                          <th>Wednesday</th>
                          <th>Thursday</th>
                          <th>Friday</th>
                          <th>Saturday</th>
                          <th>Sunday</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            6.00am - 8.00am
                          </th>
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Cardio</h5>John Deo
                          </td>
                          <td />
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                          <td />
                          <td><h5>Power Lifting</h5>James Alien</td>
                          <td />
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Cardio</h5>John Deo
                          </td>
                        </tr>
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            10.00am - 12.00am
                          </th>
                          <td />
                          <td><h5>Power Lifting</h5>James Alien</td>
                          <td />
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Cardio</h5>John Deo
                          </td>
                          <td />
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                          <td />
                        </tr>
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            5.00pm - 7.00pm
                          </th>
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                          <td />
                          <td><h5>Power Lifting</h5>James Alien</td>
                          <td />
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Cardio</h5>John Deo
                          </td>
                          <td />
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                        </tr>
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            7.00pm - 9.00pm
                          </th>
                          <td />
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Cardio</h5>John Deo
                          </td>
                          <td />
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                          <td />
                          <td><h5>Power Lifting</h5>James Alien</td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  id="class-crossfit"
                  className="container tab-pane fade p-0"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered table-lg m-0">
                      <thead className="bg-secondary text-white text-center">
                        <tr>
                          <th>Time</th>
                          <th>Monday</th>
                          <th>Tuesday</th>
                          <th>Wednesday</th>
                          <th>Thursday</th>
                          <th>Friday</th>
                          <th>Saturday</th>
                          <th>Sunday</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            6.00am - 8.00am
                          </th>
                          <td><h5>Cardio</h5>John Deo</td>
                          <td />
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Crossfit</h5>
                            Adam Phillips
                          </td>
                          <td />
                          <td><h5>Power Lifting</h5>James Alien</td>
                          <td />
                          <td><h5>Cardio</h5>John Deo</td>
                        </tr>
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            10.00am - 12.00am
                          </th>
                          <td />
                          <td><h5>Power Lifting</h5>James Alien</td>
                          <td />
                          <td><h5>Cardio</h5>John Deo</td>
                          <td />
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Crossfit</h5>
                            Adam Phillips
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            5.00pm - 7.00pm
                          </th>
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Crossfit</h5>
                            Adam Phillips
                          </td>
                          <td />
                          <td><h5>Power Lifting</h5>James Alien</td>
                          <td />
                          <td><h5>Cardio</h5>John Deo</td>
                          <td />
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Crossfit</h5>
                            Adam Phillips
                          </td>
                        </tr>
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            7.00pm - 9.00pm
                          </th>
                          <td />
                          <td><h5>Cardio</h5>John Deo</td>
                          <td />
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Crossfit</h5>
                            Adam Phillips
                          </td>
                          <td />
                          <td><h5>Power Lifting</h5>James Alien</td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  id="class-powerlifting"
                  className="container tab-pane fade p-0"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered table-lg m-0">
                      <thead className="bg-secondary text-white text-center">
                        <tr>
                          <th>Time</th>
                          <th>Monday</th>
                          <th>Tuesday</th>
                          <th>Wednesday</th>
                          <th>Thursday</th>
                          <th>Friday</th>
                          <th>Saturday</th>
                          <th>Sunday</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            6.00am - 8.00am
                          </th>
                          <td><h5>Cardio</h5>John Deo</td>
                          <td />
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                          <td />
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Power Lifting</h5>
                            James Alien
                          </td>
                          <td />
                          <td><h5>Cardio</h5>John Deo</td>
                        </tr>
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            10.00am - 12.00am
                          </th>
                          <td />
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Power Lifting</h5>
                            James Alien
                          </td>
                          <td />
                          <td><h5>Cardio</h5>John Deo</td>
                          <td />
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                          <td />
                        </tr>
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            5.00pm - 7.00pm
                          </th>
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                          <td />
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Power Lifting</h5>
                            James Alien
                          </td>
                          <td />
                          <td><h5>Cardio</h5>John Deo</td>
                          <td />
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                        </tr>
                        <tr>
                          <th className="bg-secondary text-white align-middle">
                            7.00pm - 9.00pm
                          </th>
                          <td />
                          <td><h5>Cardio</h5>John Deo</td>
                          <td />
                          <td><h5>Crossfit</h5>Adam Phillips</td>
                          <td />
                          <td className="bg-primary text-white">
                            <h5 className="text-white">Power Lifting</h5>
                            James Alien
                          </td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Class Timetable End */}
          {/* BMI Calculation Start */}
          <div className="container-fluid position-relative bmi my-5" id="bmi">
            <div className="container">
              <div className="row px-3 align-items-center">
                <div className="col-md-6">
                  <div className="pr-md-3 d-none d-md-block">
                    <h4 className="text-primary">Body Mass Index </h4>
                    <h4 className="display-4 text-white font-weight-bold mb-4">
                      Whate is BMI?
                    </h4>
                    <p className="m-0 text-white">
                      Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam
                    </p>
                  </div>
                </div>
                <div className="col-md-6 bg-secondary py-5">
                  <div className="py-5 px-3">
                    <h1 className="mb-4 text-white">Calculate your BMI</h1>
                    <form>
                      <div className="form-row">
                        <div className="col form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg bg-dark text-white"
                            placeholder="Weight (KG)"
                          />
                        </div>
                        <div className="col form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg bg-dark text-white"
                            placeholder="Height (CM)"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg bg-dark text-white"
                            placeholder="Age"
                          />
                        </div>
                        <div className="col form-group">
                          <select className="custom-select custom-select-lg bg-dark text-muted">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col">
                          <input
                            type="button"
                            className="btn btn-lg btn-block btn-dark border-light pulse animated infinite"
                            defaultValue="Calculate Now"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* BMI Calculation End */}
          {/* Team Start */}
          <div className="container pt-5 team" id="team">
            <div className="d-flex flex-column text-center mb-5">
              <h4 className="text-primary font-weight-bold">Our Trainers</h4>
              <h4 className="display-4 font-weight-bold">
                Meet Our Expert Trainers
              </h4>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-5">
                <div
                  className="card border-0 bg-secondary text-center text-white"
                  data-aos="flip-left"
                  data-aos-duration={1000}
                >
                  <img className="card-img-top" src="img/team-1.jpg" alt="" />
                  <div className="card-social d-flex align-items-center justify-content-center">
                    <a
                      className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={{width: '40px', height: '40px'}}
                      href="#"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={{width: '40px', height: '40px'}}
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                   
                    <a
                      className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={{width: '40px', height: '40px'}}
                      href="#"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                  <div className="card-body bg-secondary">
                    <h4 className="card-title text-primary">Adam Phillips</h4>
                    <p className="card-text">Trainer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <div
                  className="card border-0 bg-secondary text-center text-white "
                  data-aos="flip-left"
                  data-aos-duration={1000}
                >
                  <img className="card-img-top" src="img/team-2.jpg" alt="" />
                  <div className="card-social d-flex align-items-center justify-content-center">
                    <a
                      className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={{width: '40px', height: '40px'}}
                      href="#"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={{width: '40px', height: '40px'}}
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                   
                    <a
                      className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={{width: '40px', height: '40px'}}
                      href="#"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                  <div className="card-body bg-secondary">
                    <h4 className="card-title text-primary">John Deo</h4>
                    <p className="card-text">Trainer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <div
                  className="card border-0 bg-secondary text-center text-white"
                  data-aos="flip-left"
                  data-aos-duration={1000}
                >
                  <img className="card-img-top" src="img/team-3.jpg" alt="" />
                  <div className="card-social d-flex align-items-center justify-content-center">
                    <a
                      className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={{width: '40px', height: '40px'}}
                      href="#"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={{width: '40px', height: '40px'}}
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                   
                    <a
                      className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={{width: '40px', height: '40px'}}
                      href="#"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                  <div className="card-body bg-secondary">
                    <h4 className="card-title text-primary">James Alien</h4>
                    <p className="card-text">Trainer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <div
                  className="card border-0 bg-secondary text-center text-white"
                  data-aos="flip-left"
                  data-aos-duration={1000}
                >
                  <img className="card-img-top" src="img/team-4.jpg" alt="" />
                  <div className="card-social d-flex align-items-center justify-content-center">
                    <a
                      className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={{width: '40px', height: '40px'}}
                      href="#"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={{width: '40px', height: '40px'}}
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                   
                    <a
                      className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={{width: '40px', height: '40px'}}
                      href="#"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                  <div className="card-body bg-secondary">
                    <h4 className="card-title text-primary">Mical Jame</h4>
                    <p className="card-text">Trainer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Team End */}
          {/* Testimonial Start */}
          <div className="container pt-5" id="contact">
            <div className="d-flex flex-column text-center mb-5">
              <h4 className="text-primary font-weight-bold">Get In Touch</h4>
              <h4 className="display-4 font-weight-bold">
                Email Us For Any Query
              </h4>
            </div>
            <div className="row px-3 pb-2">
              <div className="col-sm-4 text-center mb-3">
                <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary" />
                <h4 className="font-weight-bold">Address</h4>
                <p>123 Street, New York, USA</p>
              </div>
              <div className="col-sm-4 text-center mb-3">
                <i className="fa fa-2x fa-phone-alt mb-3 text-primary" />
                <h4 className="font-weight-bold">Phone</h4>
                <p>+012 345 6789</p>
              </div>
              <div className="col-sm-4 text-center mb-3">
                <i className="fa fa-2x fa-envelope mb-3 text-primary" />
                <h4 className="font-weight-bold">Email</h4>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 pb-5">
                <iframe
                  style={{width: '100%', height: '392px'}}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameBorder={0}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
              <div className="col-md-6 pb-5">
                <div className="contact-form">
                  <div id="success" />
                  <form
                    name="sentMessage"
                    id="contactForm"
                    noValidate="novalidate"
                  >
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        required="required"
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        required="required"
                        data-validation-required-message="Please enter a subject"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <textarea
                        className="form-control"
                        rows={6}
                        id="message"
                        placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter your message"
                        defaultValue={''}
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div>
                      <button
                        className="btn btn-outline-primary pulse animated infinite"
                        type="submit"
                        id="sendMessageButton"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial End */}
          {/* Footer Start */}
          <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
            <div className="row pt-5">
              <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Get In Touch</h4>
                <p>
                  <i className="fa fa-map-marker-alt mr-2" />
                  123 Street, New York, USA
                </p>
                <p><i className="fa fa-phone-alt mr-2" />+012 345 67890</p>
                <p><i className="fa fa-envelope mr-2" />info@example.com</p>
                <div className="d-flex justify-content-start mt-4">
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{width: '40px', height: '40px'}}
                    href="#"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{width: '40px', height: '40px'}}
                    href="#"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{width: '40px', height: '40px'}}
                    href="#"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5" />
              <div className="col-lg-3 col-md-6 mb-5" />
              <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Opening Hours</h4>
                <h5 className="text-white">Monday - Friday</h5>
                <p>8.00 AM - 8.00 PM</p>
                <h5 className="text-white">Saturday - Sunday</h5>
                <p>2.00 PM - 8.00 PM</p>
              </div>
            </div>
            <div className="container border-top border-dark pt-5">
              <p className="m-0 text-center text-white">
                ©
                {' '}
                <a className="text-white font-weight-bold" href="#">
                  Your Site Name
                </a>
                . All Rights Reserved. Designed by
                <a
                  className="text-white font-weight-bold"
                  href="https://19130215hci2021.tk/"
                >
                  Quoc Thinh
                </a>
              </p>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-outline-primary back-to-top">
          <i className="fa fa-angle-double-up" />
        </a>
      </div>
    );
  }
}
