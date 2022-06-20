import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import ShowMyList from './ShowMythemaList';

function Mytheme(props) {
  const [MythemaList, setMyThemaList] = useState([]);

  useEffect(()=>{
    const fetchMytheme = async() => {
      const result = await axios(`/thema/getMyThema`);
      // console.log(result.data.thema_list)
      console.log(result.data.thema_list);
      setMyThemaList(result.data.thema_list);
    };

    fetchMytheme();
    
  },[]);

  // if(MythemaList.length === 0){
  //   return null
  // }



  return (
    <div className="mytheme">

      <div className="mythemetextandbtn">
        <div className="mythemesidetext">
            <span className="mythemetext">나의 테마지도</span> 
            <span className="mythemetext2">제작한 테마지도 모음입니다.</span>
        </div>
        <div className="maketheme">
        <button className="makethemebutton"><Link to="/Maketheme" style={{textDecoration: 'none'}}>+</Link></button>
        </div>
      </div>

      <ShowMyList mythemaitems={MythemaList} />

    </div>
  );
}

export default Mytheme;

