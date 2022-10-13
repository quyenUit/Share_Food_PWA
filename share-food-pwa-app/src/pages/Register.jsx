import React from "react";
import Helmet from "../components/Helmet/Helmet";
// import { Link } from "react-router-dom";
import logologin from "../assets/images/res-logo.png";
import "../styles/Register.css";

const Register = () => {
  return (
    <Helmet title="Login">
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
                      />
                    </div>

                    <div className="col-12 form-group register-input">
                      <i className="ri-lock-password-line pass"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mật khẩu"
                      />
                    </div>

                    <div className="col-12 form-group register-input">
                      <i className="ri-lock-2-line re_pass"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập lại mật khẩu"
                      />
                    </div>

                    <div className="col-12 form-group register-input">
                      <i className="ri-phone-line phone"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>

                    <div className="col-12">
                      <button className="btn-register">Tạo tài khoản</button>
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
};

export default Register;
