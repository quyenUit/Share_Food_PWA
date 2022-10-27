import React, { Component } from "react";
import Helmet from "../components/Helmet/Helmet";
// import { Link } from "react-router-dom";
import logologin from "../assets/images/res-logo.png";
import "../styles/Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      repassword: "",
      phone: "",
      isShowPassword: false,
      isShowRePassword: false,
    };
  }

  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleOnChangeRePassword = (event) => {
    this.setState({
      repassword: event.target.value,
    });
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassWord: !this.state.isShowPassWord,
    });
  };

  handleShowHideRePassword = () => {
    this.setState({
      isShowRePassWord: !this.state.isShowRePassWord,
    });
  };
  handleOnChangePhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  handleRegister = () => {
    console.log(
      "username: ",
      this.state.username,
      "password: ",
      this.state.password,
      "repassword: ",
      this.state.repassword,
      "phone: ",
      this.state.phone
    );
    console.log("all satate", this.state);
  };

  render() {
    return (
      <Helmet title="Register">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-lg-4 col-md-8 mx-auto">
                    {/* form login */}
                    <div className="register-content row">
                      <div className="col-12 text-register">
                        Đăng ký tài khoản
                      </div>
                      <div className="col-12">
                        <img src={logologin} alt="logo" className="logo-img" />
                      </div>
                      <div className="col-12 form-group register-input">
                        <i className="ri-user-3-line user"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tên đăng nhập"
                          value={this.state.username}
                          onChange={(event) =>
                            this.handleOnChangeUsername(event)
                          }
                        />
                      </div>

                      <div className="col-12 form-group register-input">
                        <i className="ri-lock-password-line pass"></i>
                        <div className="custom-input-password">
                          <input
                            className="form-control"
                            type={
                              this.state.isShowPassWord ? "text" : "password"
                            }
                            placeholder="Mật khẩu"
                            value={this.state.password}
                            onChange={(event) =>
                              this.handleOnChangePassword(event)
                            }
                          />
                          <span
                            onClick={() => {
                              this.handleShowHidePassword();
                            }}
                          >
                            <i
                              className={
                                this.state.isShowPassWord
                                  ? "ri-eye-line"
                                  : "ri-eye-off-line"
                              }
                            ></i>
                          </span>
                        </div>
                      </div>

                      <div className="col-12 form-group register-input">
                        <i className="ri-lock-2-line re_pass"></i>
                        <div className="custom-input-password">
                          <input
                            className="form-control"
                            type={
                              this.state.isShowRePassWord ? "text" : "password"
                            }
                            placeholder="Nhập lại mật khẩu"
                            value={this.state.repassword}
                            onChange={(event) =>
                              this.handleOnChangeRePassword(event)
                            }
                          />
                          <span
                            onClick={() => {
                              this.handleShowHideRePassword();
                            }}
                          >
                            <i
                              className={
                                this.state.isShowRePassWord
                                  ? "ri-eye-line"
                                  : "ri-eye-off-line"
                              }
                            ></i>
                          </span>
                        </div>
                      </div>

                      <div className="col-12 form-group register-input">
                        <i className="ri-phone-line phone"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nhập số điện thoại"
                          value={this.state.phone}
                          onChange={(event) => this.handleOnChangePhone(event)}
                        />
                      </div>

                      <div className="col-12">
                        <button
                          className="btn-register"
                          onClick={() => {
                            this.handleRegister();
                          }}
                        >
                          Tạo tài khoản
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    );
  }
}

export default Register;
