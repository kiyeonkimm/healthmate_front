// Signup.js
import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({
      ...signupInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 처리 로직을 여기에 작성하세요.
    console.log("Signup info:", signupInfo);
  };

  return (
    <div className="container">
      <div className="title">회원가입</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={signupInfo.username}
          onChange={handleChange}
          className="input-field"
          placeholder="아이디"
        />
        <input
          type="password"
          name="password"
          value={signupInfo.password}
          onChange={handleChange}
          className="input-field"
          placeholder="비밀번호"
        />
        <input
          type="password"
          name="confirmPassword"
          value={signupInfo.confirmPassword}
          onChange={handleChange}
          className="input-field"
          placeholder="비밀번호 확인"
        />
        <input
          type="email"
          name="email"
          value={signupInfo.email}
          onChange={handleChange}
          className="input-field"
          placeholder="이메일 입력"
        />
        <button type="submit" className="button">
          회원가입 하기
        </button>
      </form>
    </div>
  );
};

export default Signup;
