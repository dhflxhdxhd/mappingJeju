import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Mytheme(props) {
  return (
  <div className="mytheme">
    <div className="mythemetextandbtn">
      <div className="mythemesidetext">
          <span className="mythemetext">나의 테마지도</span> 
          <span className="mythemetext2">제작한 테마지도 모음입니다.</span>
      </div>
      <div className="maketheme">
      <button className="makethemebutton"><Link to="/Maketheme">+</Link></button>
      </div>
    </div>
    <div className="viewmytheme">
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