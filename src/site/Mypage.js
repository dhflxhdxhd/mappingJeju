import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import '../New.css';

const Mypage = () => {
  return (
    <div className="contents-wrapper">
      <div className='mp-wrapper'>
        <div className="mypagetextd">
          <span className="mypagetext">마이페이지</span>
        </div>
        <div className="mypagebutton">
          <button className="gothemebutton"><Link to="/Mytheme">나의 테마지도</Link></button>
          <button className="gofavoritebutton"><Link to="/Favoritetheme">찜 목록</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Mypage;