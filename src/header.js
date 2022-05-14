import isLogin from "./login/checkLogin";

const Header = () => {
    console.log(isLogin);
    function handleLogOut(event){
        console.log("logout clicked");
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