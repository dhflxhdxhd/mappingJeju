import axios from "axios";

function logout(){
    try{
        axios.get('https://c761f5bd-e611-47d2-8912-46c738863cee.mock.pstmn.io/list/logout')
        .then(resposne => {
            sessionStorage.clear();
            window.location.href = "/Login"
        })
    } catch(error){
        alert('logout failed');
    }

}

export default logout;