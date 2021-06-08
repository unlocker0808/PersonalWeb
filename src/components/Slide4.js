import React, { Component } from 'react';
import Menu from './Menu';
import { AnimatePresence, motion } from "framer-motion";


export default class Slide4 extends Component {
  render() {
    const pageVariants = {
      initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
      },
      in: {
        opacity: 1,
        x: 0,
        scale: 1
      },
      out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2
      }
    };

    const pageTransition = {
      type: "tween",
      ease: "anticipate",
      duration: 0.5
    };

    const pageStyle = {
      position: "absolute"
    };
    return (
      <div className="indexxx"
      >
        <div className="slides">
          <Menu />
          <div className="slide" id={4} >
            <motion.div className="content fourth-content" initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
              <div className="container-fluid">
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
                      <div className="card-body">
                        <p>
                          <a
                            className="card-link"
                            href="https://hci2021group04.tk/"
                            style={{ fontSize: '16px', color: 'white' }}
                            target="_blank"
                          >
                            Hci2021group04.tk
                        </a>
                        </p>
                        <p>
                          <a
                            className="card-link"
                            href="https://hci2021group04.tk/schedule"
                            style={{ fontSize: '16px', color: 'white' }}
                            target="_blank"
                          >
                            - Hoàn thành trang schedule
                      </a></p>
                        <hr />
                        <p style={{ color: 'white' }}>Tự đánh giá: 20% đóng góp</p>
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
                      <div className="card-body" style={{ color: 'white' }}>
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
                      <div className="card-body" style={{ color: 'white' }}>

                        <p><a
                          className="card-link"
                          href="https://projectteam4.tk/"
                          style={{ fontSize: '16px', color: 'white' }}
                          target="_blank"
                        >
                          Projectteam4.tk
                        </a></p>

                        <p> <a
                          className="card-link"
                          href="https://projectteam4.tk/download"
                          style={{ fontSize: '16px', color: 'white' }}
                          target="_blank"
                        >
                          - Hoàn thành trang download
                      </a></p>

                        <p> <a
                          className="card-link"
                          href="https://projectteam4.tk/contact"
                          style={{ fontSize: '16px', color: 'white' }}
                          target="_blank"
                        >
                          - Hoàn thành trang contact
                      </a></p>
                        <p>
                          <a
                            className="card-link"
                            href="https://projectteam4.tk/login"
                            style={{ fontSize: '16px', color: 'white' }}
                            target="_blank"
                          >
                            - Hoàn thành trang login
                      </a></p>
                        <p>
                          <a
                            className="card-link"
                            href="https://projectteam4.tk/forgot"
                            style={{ fontSize: '16px', color: 'white' }}
                            target="_blank"
                          >
                            - Hoàn thành trang forgot password
                      </a></p>
                        <p>
                          <a
                            className="card-link"
                            href="https://projectteam4.tk/signUp"
                            style={{ fontSize: '16px', color: 'white' }}
                            target="_blank"
                          >
                            - Hoàn thành trang sign up
                      </a></p>
                        <p>
                          <a
                            className="card-link"
                            style={{ fontSize: '16px', color: 'white' }}
                          >
                            - Hoàn thành phần footer
                      </a></p>
                        <p>
                          <a
                            className="card-link"
                            style={{ fontSize: '16px', color: 'white' }}
                          >
                            - Hoàn thành phần menu
                      </a></p>
                        <p>
                          <a
                            className="card-link"
                            style={{ fontSize: '16px', color: 'white' }}
                          >
                            - Hoàn thành phần tìm kiếm
                      </a>
                        </p>
                        <hr />
                        <p>Tự đánh giá: 20% đóng góp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}
