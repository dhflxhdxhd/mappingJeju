import moreImg from '../img/viewmore.png'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import ShowAllList from './ShowAllThemaList';

function Alltheme(props) {
  const [AllthemaList, setAllThemaList] = useState([]);

  useEffect(()=>{
    const fetchAlltheme = async() => {
      const result = await axios(`/thema/getAllThema`);
      // console.log(result.data);
      setAllThemaList(result.data.thema_info);
    };

    fetchAlltheme();
    
  },[]);

  return (
  <div className="alltheme">
    <div className="allthemesidetext">
        <span className="allthemetext">전체 테마</span> 
        <span className="allthemetext2">등록되어 있는 테마들입니다.</span>
    </div>

    <ShowAllList allthemaitems={AllthemaList} />

    <div className="viewmore">
    <button className="viewmorebutton">
    </button>
    </div>
  </div>

  );
}

export default Alltheme;