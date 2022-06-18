import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import ShowSearchList from './ShowSearchthemaList';
import moreImg from '../img/viewmore.png'

function Searchtheme(props) {
  const [SearchthemaList, setSearchThemaList] = useState([]);

  useEffect(()=>{
    const fetchSearchtheme = async() => {
      const result = await axios(`/thema/search`);
      setSearchThemaList(result.data.result);
      // setkeyword(result.data.keyword);
      // console.log(result.data.result);
    };

    fetchSearchtheme();
    
  },[]);

  return (
    <div className="searchtheme">
      <div className="searchsidetext">
        <span className="searchtext">검색결과</span> 
        <span className="searchtext2">검색어와 관련된 테마들입니다.</span>
      </div>

      <ShowSearchList searchthemaitems={SearchthemaList} />

      <div className="viewmore">
      <button className="viewmorebutton">
      <img src={moreImg} className="viewmorepic" />
      </button>
      </div>
    </div>
  );
}



export default Searchtheme;
