import './New.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, {Component} from 'react';

function Favoritetheme(props) {
  return (
  <div className="favoritetheme">
    <div className="favoritethemesidetext">
        <span className="favoritethemetext">찜한 테마들</span> 
        <span className="favoritethemetext2">즐겨찾기를 한 테마, 코스 리스트입니다.</span>
        <span className="favoritethemetext2">더 멋진 테마지도를 완성하고 싶다면 장소들에 의견을 남겨주세요.</span>
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
      <button className="goallthemebutton"><Link to="/alltheme">전체 테마 보러가기</Link></button>     
  </div>

  );
}

export default Favoritetheme;