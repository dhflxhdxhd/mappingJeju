// OAuthRedirectHandler.js
import { useEffect, useState } from 'react';
import axios from "axios"
import Spinner from '../spinner';


function OAuthRedirectHandler(){  
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const CODE = new URL(window.location.href).searchParams.get("code");

        const sendToken = async () => {
            setLoading(true);
            console.log("Loading NOW");
            
            try {
                const result = await axios.post('/api',
                    {
                        code : CODE
                    }
                ).then((response) => {
                    console.log(response);
                    const ACCESS_TOKEN = JSON.stringify(response.data.token);
                    // const ACCESS_TOKEN = response.data.access_token;
                    localStorage.setItem("token",ACCESS_TOKEN);
                    setIsLogin(true);
                    setLoading(false);
                    document.location.href = "/main"

                })

                console.log(result);

            } catch (error) {
                console.log(error);
                setLoading(false);
                window.alert("login failed by ah");
                document.location.href = "/";
            }
        }

        if(CODE){ sendToken(); }
    },[isLogin]);

    return( <div className='loading'>{loading ? <Spinner/>:""}</div> )
}


export default OAuthRedirectHandler;





