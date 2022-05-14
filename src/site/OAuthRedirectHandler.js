// OAuthRedirectHandler.js
import { useEffect, useState } from 'react';
import axios from "axios"
import Spinner from './spinner';


function OAuthRedirectHandler(){  
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    sessionStorage.setItem("isAuthorized",isLogin);

    useEffect(() => {
        // const CODE = new URL(window.location.href).searchParams.get("code");

        const sendToken = async () => {
            setLoading(true);
            console.log("Loading NOW");
            
            try {
                const result = await axios({
                    method : 'get',
                    url : 'https://c761f5bd-e611-47d2-8912-46c738863cee.mock.pstmn.io/list/login',
                }).then((response) => {
                    console.log(response);
                    const ACCESS_TOKEN = JSON.stringify(response.data.token);
                    const LOGIN_STATUS = JSON.stringify(response.data.isAuthorized);
                    sessionStorage.setItem("isAuthorized", LOGIN_STATUS);
                    sessionStorage.setItem("token",ACCESS_TOKEN);
                    
                    setLoading(false);
                    setIsLogin(JSON.parse(sessionStorage.getItem("isAuthorized")))
                    document.location.href = "/"
                })

                console.log(result);

            } catch (error) {
                console.log(error);
                setLoading(false);
                sessionStorage.clear();
                sessionStorage.setItem("isAuthorized",isLogin);
                window.alert("login failed by ah");
                document.location.href = "/login";
            }
        }

        sendToken();

    },[isLogin]);

    

    return( <div className='loading'>{loading ? <Spinner/>:""}</div> )
}


export default OAuthRedirectHandler;





