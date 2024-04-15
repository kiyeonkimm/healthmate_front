import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직을 여기에 작성하세요.
    console.log("Login info:", loginInfo);
  };

  return (
    <div className="container">
      <div className="title">로그인</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={loginInfo.username}
          onChange={handleChange}
          className="input-field"
          placeholder="아이디"
        />
        <input
          type="password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
          className="input-field"
          placeholder="비밀번호"
        />

        <button type="submit" className="button">
          로그인하기
        </button>
      </form>
    </div>
  );
};

export default Login;
