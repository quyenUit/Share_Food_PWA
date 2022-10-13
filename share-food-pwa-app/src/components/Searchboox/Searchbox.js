import React from "react";
import "../../styles/Searchbox.css";
import { NavLink } from "react-router-dom";

const Searchbox = () => {
  return (
    <div className="search-background">
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-sm-8">
            <div className="input-group ">
              <input
                type="text"
                className="form-control input-text"
                placeholder="Tìm món ăn..."
              />
              <button className="btn btn-warning">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <div className="col-sm-6">
                <div className="login">
                  <button type="button" className="btn btn-warning">
                    <span className="user">
                      <NavLink to="/login">
                        <i className="ri-account-circle-line lg"> Đăng nhập </i>
                      </NavLink>
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="share-food">
                  <button type="button" className="btn btn-warning">
                    <span className="user">
                      <NavLink to="/login">
                        <i className="ri-hand-heart-line sf"> Share food </i>
                      </NavLink>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-dm-2">
            <div className="login">
              <button type="button" className="btn btn-primary">
                <span className="user">
                  <NavLink
                    to="/login"
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : " "
                    }
                  >
                    <i className="ri-account-circle-line lg"> Đăng nhập </i>
                  </NavLink>
                </span>
              </button>
            </div>
          </div> */}

          {/* <div className="col-dm-2">
            <div className="share-food">
              <button type="button" className="btn btn-primary">
                <span className="user">
                  <NavLink
                    to="/login"
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : " "
                    }
                  >
                    <i className="ri-hand-heart-line sf"> Share food </i>
                  </NavLink>
                </span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
