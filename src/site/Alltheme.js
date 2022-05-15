import React from "react";
import '../App.css';
import moreImg from '../img/viewmore.png'

function Alltheme(props) {
  return (
  <div className="alltheme">
    <div className="allthemesidetext">
        <span className="allthemetext">전체 테마</span> 
        <span className="allthemetext2">등록되어 있는 테마들입니다.</span>
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
      <div className="viewmore">
      <button className="viewmorebutton">
      <img src={moreImg} className="viewmorepic" />
      </button>
      </div>
  </div>

  );
}

export default Alltheme;