import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react-router-dom'
import Searchtheme from './Searchtheme';
import Main from './Main';

import Mypage from './Mypage';
import MoveToLogin from './Login';
import OAuthRedirectHandler from './OAuthRedirectHandler';

import Alltheme from './Alltheme';
import Allcourse from './Allcourse';
import Mytheme from './Mytheme';
import Favoritetheme from './Favoritetheme';
import Maketheme from './Maketheme';
import Createtheme from './Createtheme';
import Createcourse from './Createcourse';
import Header from './header';
import isLogin from './checkLogin';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        {isLogin ? (
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/Mytheme" element={<Mytheme />} />
            <Route path="/Favoritetheme" element={<Favoritetheme />} />
            <Route path="/Maketheme" element={<Maketheme />} />
            <Route path="/Createtheme" element={<Createtheme />} />
            <Route path="/Createcourse" element={<Createcourse />} />

            <Route path="/Searchtheme" element={<Searchtheme />} />
            <Route path="/Alltheme" element={<Alltheme />} />
            <Route path="/Allcourse" element={<Allcourse />} />
          </Routes>
        ) : (
          <Routes>
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
