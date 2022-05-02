import React from "react";
import './App.css';

function Allcourse(props) {
  return (
  <div className="allcourse">
    <div className="allcoursetext">
        <span className="allcoursetext">전체 코스</span> 
        <span className="allcoursetext2">등록되어 있는 코스들입니다.</span>
    </div>
    <div className="viewallcourse">
        <div className="course"></div>
        <div className="course"></div>
        <div className="course"></div>
        <div className="course"></div>
        <div className="course"></div>
        <div className="course"></div>
        <div className="course"></div>
        <div className="course"></div>
        <div className="course"></div>
    </div>
      <button className="viewmorebutton">
      <img src="/img/viewmore.png" className="viewmorepic" />
      </button>
  </div>
  );
}

export default Allcourse;