
import './New.css';
import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { KAKAO_AUTH_URL } from "./OAuth"
import Header from './header';
import kakaoBtn from '../img/kakaoBtn.png'

function MoveToLogin(props) {
  return(
  <div className="wrapper">
      <a href={KAKAO_AUTH_URL}><img src={kakaoBtn} alt="kakao_login"/></a>
  </div>
  ); 
}

export default MoveToLogin;