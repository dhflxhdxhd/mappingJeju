import React from 'react';
import {  Link } from 'react-router-dom'
import mainImg from '../img/mainpic.jpg'
import '../App.css'

function Main(props) {
  return (
      <div className="contents-wrapper">
        <section className="main-wrapper">
            <div className="mainText">
                <span className="sidetext">n개의 테마</span> 
                <span className="sidetext2">당신의 주변 사람들이 장소를 공유합니다.</span>    
                <div className='mainText-search'>
                  <div className="searchboxdiv">
                      <input type="text" className="searchbox" placeholder="테마를 검색하세요!"></input>
                  </div>
                  <div className="seeall">
                    <button className="all"><Link className="all" to="/alltheme"> {'>'} 전체 테마 보러가기</Link></button>     
                    <button className="all"><Link className="all" to="/allcourse"> {'>'} 전체 코스 보러가기 </Link></button>     
                  </div> 
                </div>          

            </div>
            <div className='mainImg'>
              <img src={mainImg} className="mainpic" alt="메인화면IMG"/>
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
