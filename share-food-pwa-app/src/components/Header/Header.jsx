import React, { useRef } from "react";

import { Container, NavItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import "../../styles/header.css";
import { Home, Bookmark, User } from "react-feather";
import styled, { createGlobalStyle } from "styled-components";

const nav__links = [
  {
    icon: <i class="ri-home-5-line"></i>,
    display: "Trang chủ",
    path: "/home",
  },
  {
    icon: <i class="ri-file-list-3-line"></i>,
    display: "Tin Foods",
    path: "/foods",
  },
  {
    icon: <i class="ri-restaurant-line"></i>,
    display: "Đặt món",
    path: "/cart",
  },
  {
    icon: <i class="ri-chat-3-line"></i>,
    display: "Tin nhắn",
    path: "/contact",
  },
  {
    icon: <i class="ri-user-3-line"></i>,
    display: "Tài khoản",
    path: "/account",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            {/* <h5>Share Foods</h5> */}
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : " "
                  }
                >
                  {item.icon}

                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            {/* <span className="cart__icon">
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">2</span>
            </span>
           */}

            <span className="mobole__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
