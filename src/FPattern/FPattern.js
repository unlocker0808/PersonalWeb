import React, {Component} from 'react';

export default class FPattern extends Component {
  render () {
    return (
      <div className="bootstrap-f-pattern">
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      {' '}
                      <a href="index.html" style={{fontSize: '50px'}}>
                        Blogger
                      </a>
                      {' '}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="menu-area">
                  <div className="limit-box">
                    <nav className="main-menu">
                      <ul className="menu-area-main">
                        <li className="active">
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a >About</a>
                        </li>
                        <li>
                          <a href>Marketing</a>
                        </li>
                        <li>
                          <a href>Blog</a>
                        </li>
                        <li>
                          <a href>Contact us</a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/search_icon.png" alt="#" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="banner-slider">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <div
                  id="slider_main"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="images/slider_1.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="full slider_cont_section">
                  <h3 style={{fontSize: '30px'}}>More Featured in</h3>
                  <h2>Quoc Thinh Blogger</h2>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section layout_padding">
          <div className="container">
            <div className="row margin_top_30">
              <div className="col-md-6">
                <img src="images/blog2.png" alt="#" />
              </div>
              <div className="col-md-6">
                <div className="full blog_cont">
                  <h4>What 3 years of android taught me the hard way</h4>
                  <h5>MAY 19 2019  5 READ</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section layout_padding dark_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading">
                  <h3>Marketing</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src="images/marketing_img.png" alt="#" />
              </div>
              <div className="col-md-6">
                <div className="full blog_cont">
                  <h3 className="white_font">Where can I get some</h3>
                  <h5 className="grey_font">March 19 2019 5 READ</h5>
                  <p className="white_font">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined g to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6" style={{marginLeft: '100px'}}>
                <div className="logo">
                  {' '}
                  <a
                    href="index.html"
                    style={{fontSize: '50px', color: 'white'}}
                  >
                    Blogger
                  </a>
                  {' '}
                </div>
                <ul className="contact_information">
                  <li>
                    <span><img src="images/location_icon.png" alt="#" /></span>
                    <span className="text_cont">Nong Lam University</span>
                  </li>
                  <li>
                    <span><img src="images/phone_icon.png" alt="#" /></span>
                    <span className="text_cont">0985746352</span>
                  </li>
                  <li>
                    <span><img src="images/mail_icon.png" alt="#" /></span>
                    <span className="text_cont">
                      19130215@st.hcmuaf.edu.vns
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6" style={{marginRight: '150px'}}>
                <div className="footer_links">
                  <h3>Quick link</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {' '}
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {' '}
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {' '}
                        Evens
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {' '}
                        Markrting
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {' '}
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {' '}
                        Testimonial
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {' '}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer_links">
                  <h3>Contact us</h3>
                  <form action="index.html">
                    <fieldset>
                      <div className="field">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="field">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="field">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="field">
                        <textarea placeholder="Message" defaultValue={''} />
                      </div>
                      <div className="field">
                        <div className="center">
                          <button className="reply_bt">Send</button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="cpy">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  Copyright © 2021 Design by
                  {' '}
                  <a href="https://19130215hci2021.tk/">Le Quoc Thinh</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
