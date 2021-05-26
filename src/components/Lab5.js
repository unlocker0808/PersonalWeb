import React, {Component} from 'react';

export default class Lab5 extends Component {
  render () {
    return (
      <div className="tab-pane" role="tabpanel" id="tab-5">
        <div>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                role="tab"
                data-toggle="tab"
                href="#tab-18"
              >
                Requirement
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                role="tab"
                data-toggle="tab"
                href="#tab-20"
              >
                Implement
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" role="tabpanel" id="tab-18">
              <p>
                👉 Tạo một trang Result trên đó liệt kê những gì mình đã làm/học được trong suốt quá trình làm bài tập nhóm. Dẫn link tới từng trang do SV đã làm.
              </p>
              <p>
                👉 Tự đánh giá mình được bao nhiêu % trong tổng số 100% của bài tập nhóm
              </p>
            </div>
            <div className="tab-pane" role="tabpanel" id="tab-20">
              <div className="row space-rows">
                <div className="col">
                  <div
                    className="card cards-shadown cards-hover"
                    data-aos="flip-left"
                    data-aos-duration={950}
                  >
                    <div className="card-header">
                      <div className="cardheader-text">
                        <h4 id="heading-card">Web nhóm</h4>
                      </div>
                    </div>
                    <div className="card-body-1">
                      <div style={{textAlign: 'center'}}>
                        <a
                          className="card-link"
                          href="https://hci2021group04.tk/"
                          style={{fontSize: '16px', color: 'white'}}
                          target="_blank"
                        >
                          Hci2021group04.tk
                        </a>
                        <br />
                      </div>
                      <a
                        className="card-link"
                        href="https://hci2021group04.tk/schedule"
                        style={{fontSize: '16px', color: 'white'}}
                        target="_blank"
                      >
                        - Hoàn thành trang schedule
                      </a>
                      <hr />
                      <p>Tự đánh giá: 20% đóng góp</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card cards-shadown cards-hover"
                    data-aos="slide-right"
                    data-aos-duration={950}
                  >
                    <div className="card-header">
                      <div className="cardheader-text">
                        <h4 id="heading-card">Kiến thức</h4>
                      </div>
                    </div>
                    <div className="card-body-2">
                      <p>
                        - Có kiến thức về HTML, CSS, JS, Bootstrap
                      </p>
                      <p>- Biết sử dụng Bootstrap Studio</p>
                      <p>- Có kiến thức và biết sử dụng ReactJS</p>
                      <p>- Biết sử dụng Firebase</p>
                      <p>- Tạo được một trang web cá nhân</p>
                      <p>
                        - Cùng team xây dựng một web nhóm và một web project
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card cards-shadown cards-hover"
                    data-aos="flip-up"
                    data-aos-duration={950}
                  >
                    <div className="card-header cards-header-hover">
                      <div className="cardheader-text">
                        <h4 id="heading-card">Web project</h4>
                      </div>
                    </div>
                    <div className="card-body-3">
                      <div style={{textAlign: 'center'}}>
                        <a
                          className="card-link"
                          href="https://projectteam4.tk/"
                          style={{fontSize: '16px', color: 'white'}}
                          target="_blank"
                        >
                          Projectteam4.tk
                        </a>
                        <br />
                      </div>
                      <a
                        className="card-link"
                        href="https://projectteam4.tk/download"
                        style={{fontSize: '16px', color: 'white'}}
                        target="_blank"
                      >
                        - Hoàn thành trang download
                      </a>
                      <br />
                      <a
                        className="card-link"
                        href="https://projectteam4.tk/contact"
                        style={{fontSize: '16px', color: 'white'}}
                        target="_blank"
                      >
                        - Hoàn thành trang contact
                      </a>
                      <br />
                      <a
                        className="card-link"
                        href="https://projectteam4.tk/login"
                        style={{fontSize: '16px', color: 'white'}}
                        target="_blank"
                      >
                        - Hoàn thành trang login
                      </a>
                      <br />
                      <a
                        className="card-link"
                        href="https://projectteam4.tk/forgot"
                        style={{fontSize: '16px', color: 'white'}}
                        target="_blank"
                      >
                        - Hoàn thành trang forgot password
                      </a>
                      <br />
                      <a
                        className="card-link"
                        href="https://projectteam4.tk/signUp"
                        style={{fontSize: '16px', color: 'white'}}
                        target="_blank"
                      >
                        - Hoàn thành trang sign up
                      </a>
                      <br />
                      <a
                        className="card-link"
                        style={{fontSize: '16px', color: 'white'}}
                      >
                        - Hoàn thành phần footer
                      </a>
                      <br />
                      <a
                        className="card-link"
                        style={{fontSize: '16px', color: 'white'}}
                      >
                        - Hoàn thành phần menu
                      </a>
                      <br />
                      <a
                        className="card-link"
                        style={{fontSize: '16px', color: 'white'}}
                      >
                        - Hoàn thành phần tìm kiếm
                      </a>
                      <br />
                      <hr />
                      <p>Tự đánh giá: 70% đóng góp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
