import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom'
import React from 'react-router-dom'
import Searchtheme from './Searchtheme';
import Main from './Main';
import Mypage from './Mypage';
import Login from './Login';
import Alltheme from './Alltheme';
import Allcourse from './Allcourse';
import Mytheme from './Mytheme';
import Favoritetheme from './Favoritetheme';
import Maketheme from './Maketheme';
import Createtheme from './Createtheme';
import Createcourse from './Createcourse';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
        <Route path="/Searchtheme" element={<Searchtheme />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Alltheme" element={<Alltheme />} />
        <Route path="/Allcourse" element={<Allcourse />} />
        <Route path="/Mytheme" element={<Mytheme />} />
        <Route path="/Favoritetheme" element={<Favoritetheme />} />
        <Route path="/Maketheme" element={<Maketheme />} />
        <Route path="/Createtheme" element={<Createtheme />} />
        <Route path="/Createcourse" element={<Createcourse />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
