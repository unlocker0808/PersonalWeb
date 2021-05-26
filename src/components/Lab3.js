import React, { Component } from "react";

export default class Lab3 extends Component {
  render() {
    return (
      <div className="tab-pane" role="tabpanel" id="tab-3">
        <div>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                role="tab"
                data-toggle="tab"
                href="#tab-12"
              >
                Requirement
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                role="tab"
                data-toggle="tab"
                href="#tab-13"
              >
                Exercise 1
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                role="tab"
                data-toggle="tab"
                href="#tab-14"
              >
                Exercise 2
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" role="tabpanel" id="tab-12">
              <p>
                👉 Trong menu Labs, tạo 1 menu Lab3 (file lab3.html) sau đó tạo
                2 tab Ex1, Ex2
              </p>
              <p>
                👉 Ex1: Thiết kế một trang Web đơn giản sử dụng mẫu F-pattern
                ==&gt; chuyển sang html (ex1.html)
              </p>
              <p>
                {" "}
                👉 Ex2: Thiết kế một trang Web sử dụng mẫu Z-pattern ==&gt;
                chuyển sang html (ex2.html)
              </p>
              <p> 👉 Với cả Ex1, Ex2: Tạo 2 tab Design và Implementation:</p>
              <p style={{ textIndent: "30px" }}>
                ✍️Design: chụp lại hình ảnh để có cái nhìn tổng quan về file
                thiết kế, có nút Download để download file thiết kế về nếu muốn
              </p>
              <p style={{ textIndent: "30px" }}>
                ✍️Implementation: nội dung phần hiện thực trên html
              </p>
              <p style={{ textIndent: "30px" }}>✍️Upload lên Azure / Github</p>
            </div>
            <div className="tab-pane" role="tabpanel" id="tab-13">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    role="tab"
                    data-toggle="tab"
                    href="#tab-21"
                  >
                    Design
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    role="button"
                    target="_blank"
                    href="/FPattern"
                  >
                    Implement
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" role="tabpanel" id="tab-21">
                  <div className="designandresult">
                    <div className="designresult">
                      <p className="contentlab1">
                        <b>
                          <u>Overview</u>
                        </b>
                      </p>
                    </div>
                    <div className="buttondown">
                      <a
                        target="_blank"
                        href="https://github.com/unlocker0808/PersonalWeb/blob/master/public/img/FullScreen.png"
                      >
                        <button className="down">Download</button>
                      </a>
                    </div>
                    <img className="imgdesign" src="img/FullScreen.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" role="tabpanel" id="tab-14">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    role="tab"
                    data-toggle="tab"
                    href="#tab-23"
                  >
                    Design
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    role="tab"
                    target="_blank"
                    href="/ZPattern"
                  >
                    Implement
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" role="tabpanel" id="tab-23">
                  <div className="designandresult">
                    <div className="designresult">
                      <p className="contentlab1">
                        <b>
                          <u>Overview</u>
                        </b>
                      </p>
                    </div>

                    <div className="buttondown">
                      <a
                        target="_blank"
                        href="https://github.com/unlocker0808/PersonalWeb/blob/master/public/img/fullScreen2.png"
                      >
                        <button className="down">Download</button>
                      </a>
                    </div>
                    <img className="imgdesign" src="img/fullScreen2.png" />
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
