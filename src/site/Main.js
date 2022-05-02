import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, {Component} from 'react';

function Main(props) {
  return (
      <div className="wrapper">
        <nav className="header">
        <button className="header_item"><Link to="/Login">login</Link></button>     
        <button className="header_item"><Link to="/Mypage">mypage</Link></button> 
        </nav>
        <section className="main">
          <div className="maintext">
              <span className="sidetext">n개의 테마</span> 
              <span className="sidetext2">당신의 주변 사람들이 장소를 공유합니다.</span>              
              <div className="search">
                  <input type="text" className="searchbox" placeholder="테마를 검색하세요!"></input>
              </div>
          </div>
          <img src='/img/mainpic.png' className="mainpic"/>
          <div className="seeall">
                <button className="all"><Link to="/alltheme"> {'>'} 전체 테마 보러가기</Link></button>     
                <button className="all"><Link to="/allcourse"> {'>'} 전체 코스 보러가기 </Link></button>     
          </div>
        </section>

      </div>
    
  );
}

const Searchthemes = (props) => {
    return(
        <div>함수형 컴포sdf넌트2</div>
    );
}

export default Main;
