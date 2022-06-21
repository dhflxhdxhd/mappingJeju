import React, { useEffect, useState } from 'react';
import '../App.css';
import handleBookmark from "./bookmark";
import notMark from '../img/heart.svg'
import mark from '../img/fillheart.svg'

function AllthemaItem({allthemaitem}){

    let target_thema = allthemaitem["_id"]["$oid"]
    let MyThema = 0;  // 1:내 테마, 0:남의 테마

    function movetoMap(event){
        console.log(event.target.id)

        if (window.localStorage.getItem('userID') == allthemaitem.thema_host) {
            MyThema = 1;
            console.log(MyThema);
          } else {
            MyThema = 0;
            console.log(MyThema);
          }

        sessionStorage.setItem("thema_id", allthemaitem._id.$oid)
        document.location.href = `/Createtheme?host=${MyThema}`


    }

  
       

    return(
        <div className="theme" id={target_thema} onClick={movetoMap}>
        <div className="aligntheme">
            <div className="themeName">{allthemaitem.thema_name}</div>
            <div className="themeExplain">{allthemaitem.thema_explain}</div>
            
            <button className="bookmark" onClick={handleBookmark}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bookmark-heart" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/></svg></button> 
        </div>
    </div>
    )
}

export default AllthemaItem;
