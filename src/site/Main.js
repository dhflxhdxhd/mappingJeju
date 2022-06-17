import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import {  Link } from 'react-router-dom'
import mainImg from '../img/mainpic.jpg'

function Main(props) {
  // const [keyword, setKeyword] = useState('');
  // useEffect(() => {
  //   console.log(keyword);

  //   return () => {
  //     console.log("cleanup");
  //   } //이전 값 삭제
  // }, [keyword]);
  // const onChangeSearch= (e) => {
  //   setKeyword(e.target.value);
  //   // console.log(e.target.keword);
  // }

  // <a href="{{url_for('thema/search', keyword='keyword')}}">{{keyword}}</a>

  return (
      <div className="contents-wrapper">
        <section className="main-wrapper">
            <div className="mainText">
                <span className="sidetext">n개의 테마</span> 
                <span className="sidetext2">당신의 주변 사람들이 장소를 공유합니다.</span>    
                <div className='mainText-search'>
                  <div className="searchboxdiv">
                    <form method="GET">
                      <input type="text" className="searchbox" placeholder="테마를 검색하세요!"
                      name="keyword"
                      // onChange={onChangeSearch}
                      />
                      </form>
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


export default Main;
