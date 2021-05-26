import React, {Component} from 'react';

export default class Slide2 extends Component {
  render () {
    return (
      <div className="slide" id={2}>
        <div className="content second-content">
          <div className="container-fluid">
            <div className="col-md-6">
              <div className="left-content">
                <h2>PERSONAL INFORMATION</h2>
                <h5 style={{color: 'white'}}>
                  <i className="fa fa-user" /> LE QUOC THINH
                </h5>
                <h5 style={{color: 'white'}}>
                  <i className="fa fa-intersex" /> Nam
                </h5>
                <h5 style={{color: 'white'}}>
                  <i className="fa fa-birthday-cake" /> 1/5/2001
                </h5>
                <h5 style={{color: 'white'}}>
                  <i className="fa fa-phone" /> 0982625202
                </h5>
                <h5 style={{color: 'white'}}>
                  <i className="fa fa-inbox" /> 19130215@st.hcmuaf.edu.vn
                </h5>
                <h5 style={{color: 'white'}}>
                  <i className="fa fa-location-arrow" />
                  <a href="https://www.google.com/maps/place/An+B%C3%ACnh,+Ph%C3%BA+Gi%C3%A1o,+B%C3%ACnh+D%C6%B0%C6%A1ng,+Vi%E1%BB%87t+Nam/@11.3359628,106.7592751,12z/data=!3m1!4b1!4m5!3m4!1s0x3174bc71d4975c67:0xd981e09a434855e3!8m2!3d11.3387926!4d106.8296372?hl=vi-VN">
                    {' '}An Binh, Phu Giao, Binh Duong, Viet Nam
                  </a>
                </h5>
                <h5 style={{color: 'white'}}>
                  <i className="fa fa-pencil" />
                  <a href="https://www.hcmuaf.edu.vn/">
                    {' '}Nong Lam University
                  </a>
                </h5>
                <h5 style={{color: 'white'}}>
                  <i className="fa fa-pencil" />
                  <a href="http://fit.hcmuaf.edu.vn/">
                    {' '}Specialized: Information technology
                  </a>
                </h5>
                <div className="main-btn pulse animated infinite"><a href="#3">Labs</a></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="img/about_image.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
