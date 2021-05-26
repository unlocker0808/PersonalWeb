import React, {Component} from 'react';


export default class Lab2 extends Component {
  render () {
    return (
      <div className="tab-pane" role="tabpanel" id="tab-2">
        <div>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                role="tab"
                data-toggle="tab"
                href="#tab-9"
              >
                Requirement
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                role="tab"
                data-toggle="tab"
                href="#tab-10"
              >
                Design
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                role="tab"
                data-toggle="tab"
                href="#tab-11"
              >
                Implement
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" role="tabpanel" id="tab-9">
              <p>👉 (1) Tạo ra một user scenario</p>
              <p>
                👉 (2) Chọn 1 bước trong user scenario để thiết kế 1 form giao diện Web trên công cụ thiết kế đã chọn. Sau đó tạo ra file html tương ứng cho thiết kế này.
              </p>
              <p>
                👉 Upload lên Azure / github: trong file html có chèn hình ảnh của
                user scenario ở (1) và đường dẫn của file thiết kế ở (2).
              </p>
            </div>
            <div className="tab-pane" role="tabpanel" id="tab-10">
              <div className="designandresult">
                <div className="designresult">
                  <p className="contentlab1">
                    <b><u>User scenario</u></b>
                  </p>
                </div>
                <div className="buttondown">
                  <a
                    target="_blank"
                    href="https://github.com/unlocker0808/PersonalWeb/blob/master/public/img/userScenario.png"
                  >
                    <button className="down">Download</button>
                  </a>
                </div>
                <img className="imgdesign" src="img/userScenario.png" />
                <hr width="100%" />
                <div className="designresult">
                  <p className="contentlab1">
                    <b><u>Design</u></b>
                  </p>
                </div>
                <div className="buttondown">
                  <a
                    target="_blank"
                    href="https://github.com/unlocker0808/PersonalWeb/blob/master/public/img/lab2-paper.png"
                  >
                    <button className="down">Download</button>
                  </a>
                </div>
                <img className="imgdesign" src="img/lab2-paper.png" />
                <hr width="100%" />
                <div className="designresult">
                  <p className="contentlab1">
                    <b><u>Result</u></b>
                  </p>
                </div>
                <div className="buttondown">
                  <a
                    target="_blank"
                    href="https://github.com/unlocker0808/PersonalWeb/blob/master/public/img/lab2-design.png"
                  >
                    <button className="down">Download</button>
                  </a>
                </div>
                <img className="imgdesign" src="img/lab2-design.png" />
              </div>
            </div>
            <div className="tab-pane" role="tabpanel" id="tab-11">
              <div className="bootstrap-iso">
                <div className="wrapper">
                  <div className="container">
                    <div className="row" style={{width: '1050px'}}>
                      <div className="col-md-10 col-md-1 product">
                        <div className="row">
                          <div className="col-md-7">
                            <div className="product-image">
                              <div className="image img-fluid" />
                            </div>
                            <div className="row product-thumbnails">
                              <img
                                className="img-fluid img-thumbnail col-md-3"
                                alt="&quot;"
                                src="img/ipWhite.png"
                              />
                              <img
                                className="img-fluid img-thumbnail col-md-3"
                                alt="&quot;"
                                src="img/ipBlue.png"
                              />
                              <img
                                className="img-fluid img-thumbnail col-md-3"
                                alt="&quot;"
                                src="img/ipGray.png"
                              />
                              <img
                                className="img-fluid img-thumbnail col-md-3"
                                alt="&quot;"
                                src="img/ipPink.png"
                              />
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="product-details">
                              <h2>
                                <strong>iPhone 12 Pro Max</strong>
                                <br />
                              </h2>
                              <table classname="table">
                                <tbody>
                                  <tr>
                                    <td style={{paddingRight: '50px'}}>
                                      Màn hình:
                                    </td>
                                    <td>
                                      OLED, 6.7", Super Retina XDR
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Hệ điều hành:</td>
                                    <td>iOS 14</td>
                                  </tr>
                                  <tr>
                                    <td>Camera sau:</td>
                                    <td>3 camera 12 MP</td>
                                  </tr>
                                  <tr>
                                    <td>Camera trước:</td>
                                    <td>12 MP</td>
                                  </tr>
                                  <tr>
                                    <td>Chip:</td>
                                    <td>Apple A14 Bionic</td>
                                  </tr>
                                  <tr>
                                    <td>RAM:</td>
                                    <td>6 GB</td>
                                  </tr>
                                  <tr>
                                    <td>SIM:</td>
                                    <td>
                                      1 Nano SIM &amp; 1 eSIM, Hỗ trợ 5G
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div>
                              <div className="container">
                                <div className="row">
                                  <div
                                    className="col-md-6"
                                    style={{paddingLeft: '0px'}}
                                  >
                                    <div>
                                      <p>
                                        Bộ nhớ trong:<p />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <select>
                                      <option
                                        value={64}
                                        style={{color: 'black'}}
                                      >
                                        64GB
                                      </option>
                                      <option
                                        value={128}
                                        style={{color: 'black'}}
                                      >
                                        128GB
                                      </option>
                                      <option
                                        value={256}
                                        style={{color: 'black'}}
                                      >
                                        256GB
                                      </option>
                                      <option
                                        value={512}
                                        style={{color: 'black'}}
                                      >
                                        512GB
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="container">
                                <div className="row">
                                  <div
                                    className="col-md-6"
                                    style={{paddingLeft: '0px'}}
                                  >
                                    <div>
                                      <p>
                                        Màu:<p />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <button
                                      style={{
                                        backgroundColor: 'white',
                                        width: '25px',
                                        height: '25px',
                                      }}
                                    />
                                    <button
                                      style={{
                                        backgroundColor: 'pink',
                                        width: '25px',
                                        height: '25px',
                                      }}
                                    />
                                    <button
                                      style={{
                                        backgroundColor: 'gray',
                                        width: '25px',
                                        height: '25px',
                                      }}
                                    />
                                    <button
                                      style={{
                                        backgroundColor: 'blue',
                                        width: '25px',
                                        height: '25px',
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="container">
                                <div className="row">
                                  <div
                                    className="col-md-6"
                                    style={{paddingLeft: '0px'}}
                                  >
                                    <div>
                                      <p>
                                        Số lượng:<p />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <select>
                                      <option
                                        value={1}
                                        style={{color: 'black'}}
                                      >
                                        1
                                      </option>
                                      <option
                                        value={2}
                                        style={{color: 'black'}}
                                      >
                                        2
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{textAlign: 'center'}}>
                              <button
                                type="button"
                                className="btn btn-secondary"
                              >
                                Mua ngay
                              </button>
                              <button type="button" className="btn btn-success">
                                Thêm vào giỏ hàng
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
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
