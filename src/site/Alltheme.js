import React from "react";
import '../css/App.css';

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
      <button className="viewmorebutton">
      <img src="/img/viewmore.png" className="viewmorepic" />
      </button>
  </div>

  );
}

export default Alltheme;