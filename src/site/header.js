<<<<<<< Updated upstream:src/site/header.js
import { useState } from "react";
import { Link, Route } from "react-router-dom"
import isLogin from "./checkLogin";
=======
import logout from "./login/Logout";
>>>>>>> Stashed changes:src/header.js

const Header = () => {

    let isLogin = JSON.parse(sessionStorage.getItem("isAuthorized"))
    console.log(isLogin);
    function handleLogOut(event){
        logout();
    }

    function handleMypage(event){
        window.location.href = "/mypage"
    }

    function handleLogIn(event){
        window.location.href = "/Login"
    }
    return (
        <nav className="header" style={ {"height" : "50px"}}>
            {isLogin ? (
                <ul>
                    <li className="header_item" onClick={handleLogOut}>로그아웃</li>
                    <li className="header_item" onClick={handleMypage}>MYPAGE</li>
                </ul>
            ) : (
                <ul>
                    <li className="header_item" onClick={handleLogIn}>LOGIN</li>
                </ul>
            )}
        </nav>
    )
}

export default Header