import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Searchtheme from './site/Searchtheme';
import Main from './site/Main';
import MainP from './site/MainP';
import Mypage from './site/Mypage';
import MoveToLogin from './login/Login';
import OAuthRedirectHandler from './login/OAuthRedirectHandler';
import MypageP from './site/MypageP'
import Alltheme from './site/Alltheme';
import Allcourse from './site/Allcourse';
import Mytheme from './site/Mytheme';
import Myzzim from './site/zzim';
import Maketheme from './site/Maketheme';
import Createtheme from './site/Createtheme';
import Header from './header';
import Spinner from './spinner';
import 'bootstrap/dist/css/bootstrap.min.css';


import './reset.css'
import './App.css'

function App() {
  // localStorage.clear()
  let isLogin = JSON.parse(localStorage.getItem("isAuthorized"))
  
  return (
    <div className="App">
      <Header />
      <Router>
        {isLogin ? (
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Mypage" element={<Mypage/>} />
            <Route path="/Mytheme" element={<Mytheme />} />
            <Route path="/Favoritetheme" element={<Myzzim />} />
            <Route path="/Maketheme" element={<Maketheme />} />
            <Route path="/Createtheme" element={<Createtheme />} />
            <Route path="/Searchtheme" element={<Searchtheme />} />
            <Route path="/Alltheme" element={<Alltheme />} />
            <Route path="/Allcourse" element={<Allcourse />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/spinner" element={<Spinner />} />
            <Route path="/" element={<Main />} />
            <Route path="/login"  element={<MoveToLogin />}/>
            <Route path="/oauth/callback/kakao" element={<OAuthRedirectHandler />}></Route>
            <Route path="/Searchtheme" element={<Searchtheme />} />
            <Route path="/Alltheme" element={<Alltheme />} />
            <Route path="/Allcourse" element={<Allcourse />} />
          </Routes>
        )}

      </Router>
      </div>
  );
}

export default App;
