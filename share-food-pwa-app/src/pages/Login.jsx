import React, { Component } from "react";
import Helmet from "../components/Helmet/Helmet";
import logologin from "../assets/images/res-logo.png";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { handleLoginApi } from "../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassWord: false,
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

  handleLogin = async () => {
    console.log(
      "username: ",
      this.state.username,
      "password: ",
      this.state.password
    );
    console.log("all state ", this.state);
    try {
      await handleLoginApi(this.state.username, this.state.password);
    } catch (e) {
      console.log(e);
    }
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassWord: !this.state.isShowPassWord,
    });
  };

  render() {
    return (
      <Helmet title="Login">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-lg-4 col-md-8 mx-auto">
                    {/* form login */}
                    <div className="login-content row">
                      <div className="col-12 text-login">Login</div>
                      <div className="col-12">
                        <img src={logologin} alt="logo" className="logo-img" />
                      </div>
                      <div className="col-12 form-group login-input">
                        <i className="ri-user-3-line user"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="T??n ????ng nh???p"
                          value={this.state.username}
                          onChange={(event) =>
                            this.handleOnChangeUsername(event)
                          }
                        />
                      </div>

                      <div className="col-12 form-group login-input">
                        <i className="ri-lock-password-line pass"></i>
                        <div className="custom-input-password">
                          <input
                            className="form-control"
                            type={
                              this.state.isShowPassWord ? "text" : "password"
                            }
                            placeholder="M???t kh???u"
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

                      <div className="col-12">
                        <div className="col-6">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="remind-password">Nh??? m???t kh???u</span>
                        </div>
                        <div className="col-6">
                          <p className="forgot-password">
                            <Link to="/">B???n qu??n m???t kh???u?</Link>
                          </p>
                          {/* <span className="forgot-password">B???n qu??n m???t kh???u?</span> */}
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn-login"
                          onClick={() => {
                            this.handleLogin();
                          }}
                        >
                          ????ng nh???p
                        </button>
                      </div>
                      <div className="col-12 text-center mt-5">
                        <p>
                          Ch??a c?? t??i kho???n?
                          <Link to="/register">????ng k?? ngay</Link>
                        </p>
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

export default Login;
