import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';

const Mypage = () => {
  return (
    <div className="wrapper">
    <div>
    <span className="mypagetext">마이페이지</span>
    </div>
    <div className="mypagebutton">
    <button className="gothemebutton"><Link to="/Mytheme">나의 테마지도 보러가기</Link></button>
    <button className="gofavoritebutton"><Link to="/Favoritetheme">나의 찜 목록 보러가기</Link></button>
    </div>
  </div>
  );
}

export default Mypage;