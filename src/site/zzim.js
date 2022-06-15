import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import ShowzzimList from './showzzimList';

function Myzzim(props) {
  const [MyzzimList, setMyzzimList] = useState([]);

  useEffect(()=>{
    const fetchMyzzim = async() => {
      const result = await axios.get(`/thema/getmyzzim`);
      console.log(result.data.zzim_list)
      setMyzzimList(result.data.zzim_list);
    };

    fetchMyzzim();
    
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
        <button className="makethemebutton"><Link to="/Maketheme">+</Link></button>
        </div>
      </div>

      <ShowzzimList zzimitems={MyzzimList} />

    </div>
  );
}

export default Myzzim;

