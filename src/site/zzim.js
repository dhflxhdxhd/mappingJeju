import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import '../New.css';
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
    <div className="favoritetheme">
        <div className="favoritethemesidetext">
            <span className="favoritethemetext">찜한 테마들</span> 
            <span className="favoritethemetext2">즐겨찾기를 한 테마, 코스 리스트입니다.</span>
            <span className="favoritethemetext2">더 멋진 테마지도를 완성하고 싶다면 장소들에 의견을 남겨주세요.</span>
        </div>
        <div className="maketheme">
            <button className="makethemebutton"><Link to="/Maketheme" style={{textDecoration: 'none'}}>+</Link></button>
        </div>

        <ShowzzimList zzimitems={MyzzimList} />
        <button className="goallthemebutton"><Link to="/alltheme" style={{textDecoration: 'none'}}>전체 테마 보러가기</Link></button>     
    </div>
  );
}

export default Myzzim;

