import React from "react";
import "./Advertisement.css";
import healthImage from "../assets/ad_image.png";

function Advertisement() {
  return (
    <div className="container">
      <div className="advertisement">
        <div className="content">
          <div className="text">
            <h1>건강검진표,</h1>
            <p>건강메이트와 분석해보아요</p>
            <img src={healthImage} alt="건강검진" className="image" />
          </div>
        </div>
        <button className="button">내 건강 검진표 등록하기 </button>
      </div>
    </div>
  );
}

export default Advertisement;
