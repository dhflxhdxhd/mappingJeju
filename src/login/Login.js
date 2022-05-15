import { KAKAO_AUTH_URL } from "./OAuth"
import kakaoBtn from '../img/kakaoBtn.png'

function MoveToLogin(){
  return(
      <div className="contents-wrapper">
          <div className="Login-wrapper">
              <p id="Login-title">로그인</p>
              <p id="Login-sub">카카오 계정을 이용하여 로그인해주세요</p>
              <div className="LoginBtn">
                  <a href={KAKAO_AUTH_URL}><img src={kakaoBtn} alt="kakao_login"/></a>
              </div>
          </div>
      </div>
  )
}



export default MoveToLogin;

