// OAuthRedirectHandler.js
import { useEffect, useState } from 'react';
import axios from "axios"
import Spinner from '../spinner';


function OAuthRedirectHandler(){  
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    localStorage.setItem("isAuthorized",isLogin);

    useEffect(() => {
        const CODE = new URL(window.location.href).searchParams.get("code");

        const sendToken = async () => {
            setLoading(true);
            console.log("Loading NOW");

            try {
                const result = await axios({
                    method : 'post',
                    url : '/login',
                    data : JSON.stringify({
                        code : CODE,
                    }),
                    headers: {
                        "Content-Type": `application/json`,
                    },
                }).then((response) => {
                    console.log(response);
                    const ACCESS_TOKEN = JSON.stringify(response.data.token);
                    const LOGIN_STATUS = JSON.stringify(response.data.isAuthorized);
                    localStorage.setItem("isAuthorized", LOGIN_STATUS);
                    localStorage.setItem("token",ACCESS_TOKEN);
                    setLoading(false);
                    setIsLogin(JSON.parse(localStorage.getItem("isAuthorized")))
                    document.location.href = "/"
                })

                console.log(result);

            } catch (error) {
                console.log(error);
                setLoading(false);
                localStorage.clear();
                localStorage.setItem("isAuthorized",isLogin);
                document.location.href = "/";
            }
        }

        sendToken();

    },[isLogin]);

    return( <div className='loading'>{loading ? <Spinner/>:""}</div> )
}


export default OAuthRedirectHandler;
