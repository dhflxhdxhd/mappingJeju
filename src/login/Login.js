import '../css/App.css';
import '../css/New.css';
import React from 'react';
import { KAKAO_AUTH_URL } from "./OAuth"
import kakaoBtn from '../img/kakaoBtn.png'

function MoveToLogin(props) {
  return(
  <div className="wrapper">
      <a href={KAKAO_AUTH_URL}><img src={kakaoBtn} alt="kakao_login"/></a>

  </div>
  ); 
}


export default MoveToLogin;

