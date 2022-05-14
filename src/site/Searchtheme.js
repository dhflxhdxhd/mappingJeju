import '../css/App.css';
import React from 'react';


const Searchtheme = () => {
  return (
    <div className="search">
      <div className="serchsidetext">
        <span className="searchtext">검색결과</span> 
        <span className="searchtext2">검색어와 관련된 테마들입니다.</span>
      </div>
      <div className="searchedtheme">
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
      </div>
      <button className="viewmorebutton">
      <img src="/img/viewmore.png" className="viewmorepic" />
      </button>
    </div>
  );
}



export default Searchtheme;
