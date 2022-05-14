

sessionStorage.setItem("isAuthorized",false);
let isAuthorized = sessionStorage.getItem("isAuthorized");

let isLogin = JSON.parse(isAuthorized)

export default isLogin;