import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="건강메이트 로고" className="logo" />{" "}
      <button className="login-button">로그인</button>
    </div>
  );
}

export default Header;
