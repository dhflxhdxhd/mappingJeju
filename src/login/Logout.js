import axios from "axios";

function logout(){
    try{
        axios.get('/logout')
        .then(resposne => {
            localStorage.clear();
            window.location.href = "/Login"
        })
    } catch(error){
        alert('logout failed');
    }

}

export default logout;