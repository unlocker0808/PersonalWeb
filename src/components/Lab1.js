import React, { Component } from "react";

export default class Lab1 extends Component {
  render() {
    return (
      <div className="tab-pane active" role="tabpanel" id="tab-1">
        <div>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                role="tab"
                data-toggle="tab"
                href="#tab-6"
              >
                Requirement
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                role="tab"
                data-toggle="tab"
                href="#tab-7"
              >
                Design
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                role="tab"
                data-toggle="tab"
                href="#tab-8"
              >
                Implement
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" role="tabpanel" id="tab-6">
              <p>
                <b>👉 Yêu cầu:</b>
              </p>
              <p>
                {" "}
                1. ☑️ Chọn một đối tượng bất kì trong thế giới thực, ví dụ như
                sinh viên, môn học, giảng viên,... Sau đó{" "}
                <i>
                  <u>thiết kế chức năng Quản lý đối tượng</u>
                </i>{" "}
                đó trên html bao gồm các tính năng{" "}
                <i>
                  <u>thêm, sửa, xóa, tìm kiếm</u>{" "}
                </i>
                cho đối tượng đó. Ví dụ, làm chức năng Quản lý Sinh viên, bao
                gồm tính năng thêm, sửa, xóa, tìm kiếm.
              </p>
              <p>
                <b>
                  <i>
                    <u>
                      ❗️ Chú ý: Các thành viên trong nhóm không được chọn các
                      đối tượng giống nhau. ❗️
                    </u>
                  </i>
                </b>
              </p>
              <p>
                {" "}
                2. ☑️ Tạo 1 menu Lab1 trên website cá nhân (sử dụng thẻ trong
                html) bao gồm các tab sau:
              </p>
              <p className="tabcontent">
                ✍️ <i>Tab Requirement</i>: Copy lại nội dung của phần 1 vào đây
                (trình bày cho đẹp).
              </p>
              <p className="tabcontent">
                ✍️ <i>Tab Design</i>: Để link tới các file sau đây:
              </p>
              <p className="tabcontent1">
                - Thiết kế trên giấy (chụp lại ảnh).
              </p>
              <p className="tabcontent1">
                - Chụp lại màn hình đã thiết kế trên html.
              </p>
              <p className="tabcontent">
                ✍️ <i>Tab Implement</i>: Là trang html của chức năng Quản lý đó.
              </p>
              <p>
                »» Sau khi làm xong, upload toàn bộ lên website cá nhân trên
                firebase.
              </p>
            </div>
            <div className="tab-pane" role="tabpanel" id="tab-7">
              <div className="designandresult">
                <div className="designresult">
                  <p className="contentlab1">
                    <b>
                      <u>Design</u>
                    </b>
                  </p>
                </div>
                <div className="buttondown">
                  <a
                    target="_blank"
                    href="https://github.com/unlocker0808/PersonalWeb/blob/master/public/img/design.png"
                  >
                    <button className="down">Download</button>
                  </a>
                </div>
                <img className="imgdesign" src="img/design.png" />
                <hr width="100%" />
                <div className="designresult">
                  <p className="contentlab1">
                    <b>
                      <u>Result</u>
                    </b>
                  </p>
                </div>
                <div className="buttondown">
                  <a
                    target="_blank"
                    href="https://github.com/unlocker0808/PersonalWeb/blob/master/public/img/lab1.png"
                  >
                    <button className="down">Download</button>
                  </a>
                </div>
                <img className="imgdesign" src="img/lab1.png" />
              </div>
            </div>
            <div className="tab-pane" role="tabpanel" id="tab-8">
              <div className="roww">
                <div className="imglab1">
                  <img className="logomotor" src="img/logo-motor.png" />
                </div>
                <div className="lab1">
                  <div className="hearderr">
                    <h3>
                      <i>
                        <b>
                          <u>Motorcycle management</u>
                        </b>
                      </i>
                    </h3>
                  </div>
                  <div className="textfield-search">
                    <input
                      className="search"
                      type="text"
                      placeholder="Search"
                    />
                    <button className="search1">Search <div className="fa fa-search"></div></button>
                  </div>
                  <br />
                  <div className="information">
                    <input
                      className="textfield"
                      type="text"
                      placeholder="Name of motorcycle"
                      id="name"
                    />
                    <br />
                    <input
                      className="checkbox"
                      type="radio"
                      name="type"
                      defaultValue="Naked bike"
                    />{" "}
                    Naked bike
                    <input
                      className="checkbox"
                      type="radio"
                      name="type"
                      defaultValue="Sport bike"
                    />{" "}
                    Sport bike
                    <br />
                    <input
                      className="textfield"
                      type="text"
                      placeholder="Producer"
                      id="nsx"
                    />
                    <br />
                    <input
                      className="checkbox"
                      type="radio"
                      name="phankhoi"
                      defaultValue="250cc"
                    />{" "}
                    250cc
                    <input
                      className="checkbox"
                      type="radio"
                      name="phankhoi"
                      defaultValue="300cc"
                    />{" "}
                    300cc
                    <input
                      className="checkbox"
                      type="radio"
                      name="phankhoi"
                      defaultValue="600cc"
                    />{" "}
                    600cc
                    <input
                      className="checkbox"
                      type="radio"
                      name="phankhoi"
                      defaultValue="1000cc"
                    />{" "}
                    1000cc
                    <br />
                    <input
                      className="textfield"
                      type="text"
                      placeholder="Price"
                      id="gia"
                    />
                    <br />
                  </div>
                  <div className="lable">
                    <label>
                      <i>Name of motorcycle:</i>
                    </label>
                    <br />
                    <label>
                      <i>Type: </i>{" "}
                    </label>
                    <br />
                    <label>
                      <i>Producer: </i>
                    </label>
                    <br />
                    <label>
                      <i>Motive: </i>
                    </label>
                    <br />
                    <label>
                      <i>Price: </i>{" "}
                    </label>
                  </div>
                </div>
                <div className="buttondiv">
                  <button className="button">Add motorcycle</button>
                </div>
                <div className="tablelab1">
                  <table>
                    <tbody>
                      <tr>
                        <th>Name of motorcycle</th>
                        <th>Type</th>
                        <th>Producer</th>
                        <th>Motive</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                      <tr>
                        <td>YAMAHA YZF-R1</td>
                        <td>Sport bike</td>
                        <td>YAMAHA</td>
                        <td>1000cc</td>
                        <td>730.000.000</td>
                        <td>
                          <button className="button">
                            <i className="fa fa-edit" />
                          </button>
                          <button className="button">
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>BMW S1000RR</td>

                        <td>Sport bike</td>
                        <td>BMW</td>
                        <td>1000cc</td>
                        <td>949.000.000</td>
                        <td>
                          <button className="button">
                            <i className="fa fa-edit" />
                          </button>
                          <button className="button">
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
