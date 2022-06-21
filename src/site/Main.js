import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import {  Link } from 'react-router-dom'
import mainImg from '../img/main2.png'
import blueBtn from '../img/blueBtn.svg'
import blueBtnHover from '../img/blueBtnHover.svg';
import searchBtn from '../img/search.svg';
import Searchtheme from './Searchtheme';
import ShowSearchList from './ShowSearchthemaList';

import createBtn from '../img/makeThemeBtn.svg';
import createBtnHover from '../img/blue_makeThemeBtn.svg';

function Main(props) {
  const [Key, setKey] = useState('')
  const [Keyword, setKeyword] = useState('');
  const [Searchedtheme, setSearchTheme] = useState([]);

  const onChange = (e) => {
    setKey(e.target.value)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setKeyword(Key)
  };

  useEffect(()=>{
    const fetchsearch = async() => {
      const params = {keyword : Keyword}
      const result = await axios(`/thema/search`, {params});
      setSearchTheme(result.data.result);
    }
    fetchsearch() 
  },[Keyword]);

  // const blueBtn = document.querySelector(".blueBtn");
  // const blueBtnHover = document.querySelector(".blueBtnHover");
  const [isHovering, setIsHovering] = useState(false);
  const [iscreateBtnHovering, setIscreateBtnHovering] = useState(false);

  return (
      <div className="contents-wrapper">
        <section className="main-wrapper">
            <div className="mainText">
                <span className="sidetext">어디 갈까?</span> 
                <div className='small-sidetext'>
                  <span className="sidetext2">막상 어디에 가야할지 모르겠다면</span> 
                  <span>테마를 검색해보세요!</span>   
                  <span>누군가의 "취향이 담긴 장소"를 알려드립니다.</span>
                </div>
                <div className='mainText-search'>
                  <div className="searchboxdiv">
                  <form method="GET"
                    onSubmit={handleSubmit}>
                      <input type="text" className="searchbox" placeholder="테마를 검색하세요!"
                      value={Key}
                      id="keyword"
                      onChange={onChange}
                      />
                      <img src={searchBtn} alt="검색버튼"/>
                      </form>
                  </div>
                </div>          
                <div className='sidetext3'>
                  <span>당신의 주변사람들이 장소를 공유하고 있습니다.</span>
                </div>
            </div>
            <div className='mainImg'>
              <div onMouseOver={()=>{setIsHovering(true)}} onMouseLeave = {()=>{setIsHovering(false)}}>
              {!isHovering? (
              <img src={blueBtn} className="mainImgItem1 blueBtn" alt="전체테마로 이동하기" /> ) 
              : 
              ( <img src={blueBtnHover} className="mainImgItem1 blueBtnHover" alt="전체테마로 이동하기 hover" onClick={()=> document.location.href = "/alltheme"}/>    
              )}
              </div>

              <div onMouseOver={()=>{setIscreateBtnHovering(true)}} onMouseLeave = {()=>{setIscreateBtnHovering(false)}}>
              {! iscreateBtnHovering? (
              <img src={createBtnHover} className="mainImgItem3" alt="테마제작하기" /> ) 
              : 
              ( <img src={createBtn} className="mainImgItem3" alt="테마제작하기 hover" onClick={()=> document.location.href = "/Maketheme"}/>    
              )}
              </div>
              <img src={mainImg} className="mainImgItem2" alt="메인화면IMG"/>
            </div>
        </section>
        <Searchtheme>
        </Searchtheme>
        <div className="searchtheme">
          <div className="searchedtheme">
              <ShowSearchList searchthemaitems={Searchedtheme} />
          </div>
        </div>
      </div>
  );
}


export default Main;
