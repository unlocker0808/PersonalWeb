import React, {Component} from 'react';

export default class Lab5 extends Component {
  render () {
    return (
      <div className="tab-pane" role="tabpanel" id="tab-4">
        <div>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                role="tab"
                data-toggle="tab"
                href="#tab-15"
              >
                Requirement
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                role="tab"
                data-toggle="tab"
                href="#tab-16"
              >
                Design
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                role="tab"
                target="_blank"
                href="/Gym"
              >
                Implement
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" role="tabpanel" id="tab-15">
              <p>
                👉 Tạo một trang Web có nội dung bất kỳ, sử dụng linh hoạt tất cả những phần sau: Input Controls, Navigation, Animations, Default Settings, Guided Actions
              </p>
              <p>👉 Có biểu mẫu liên hệ</p>
            </div>
            <div className="tab-pane" role="tabpanel" id="tab-16">
              <div className="tab-pane active" role="tabpanel" id="tab-23">
                <div className="designandresult">
                  <div className="designresult">
                    <p className="contentlab1">
                      <b><u>Overview</u></b>
                    </p>
                  </div>
                  <div className="buttondown">
                    <a
                      target="_blank"
                      href="https://github.com/unlocker0808/PersonalWeb/blob/master/public/img/fullScreen3.png"
                    >
                      <button className="down">Download</button>
                    </a>
                  </div>
                  <img className="imgdesign" src="img/fullScreen3.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
