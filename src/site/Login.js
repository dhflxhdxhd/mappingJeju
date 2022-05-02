import './New.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, {Component} from 'react';

function Login(props) {
  return (
  <div className="wrapper">
    <nav className="header">
        <button className="loginheader_item"><Link to="/Mypage">mypage</Link></button> 
    </nav>
    <div>
    <span className="logintext">로그인</span>
    </div>
    <button className="loginbutton">카카오톡으로 로그인</button>
  </div>
  );
}

export default Login;