const CLIENT_ID = "03062174fc92c96245f37bd14ab9bdb8";
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao"

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const GRANT_TYPE = "authorization_code"


export {KAKAO_AUTH_URL, GRANT_TYPE, CLIENT_ID, REDIRECT_URI};

