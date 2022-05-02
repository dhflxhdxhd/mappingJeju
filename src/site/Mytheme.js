import React from "react";
import './New.css';

function Mytheme(props) {
  return (
  <div className="mytheme">
    <div className="mythemesidetext">
        <span className="mythemetext">나의 테마지도</span> 
        <span className="mythemetext2">제작한 테마지도 모음입니다.</span>
    </div>
    <div className="maketheme">
    <button className="makethemebutton">+</button>
    </div>
    <div className="viewalltheme">
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
      </div>
  </div>

  );
}

export default Mytheme;