import logout from "./login/Logout";
import React from 'react'

const Header = () => {
    let isLogin = JSON.parse(localStorage.getItem("isAuthorized"))
    console.log(isLogin);

    function GotoMain(event){
        window.location.href = "/"
    }

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
        <nav className="header" >
            {isLogin ? (
                <ul>
                    <li className="header_item" onClick={handleLogOut}>로그아웃</li>
                    <li className="header_item" onClick={handleMypage}>MYPAGE</li>
                    <li className="header_item" onClick={GotoMain}>HOME</li>
                </ul>
            ) : (
                <ul>
                    <li className="header_item" onClick={handleLogIn}>LOGIN</li>
                    <li className="header_item" onClick={GotoMain}>HOME</li>
                </ul>
            )}
        </nav>
    )
}

export default Header 
