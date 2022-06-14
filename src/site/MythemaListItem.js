import React from "react";
import '../App.css';

function MythemaItem({mythemaitem}){

    let target_thema = mythemaitem["_id"]["$oid"]
    let MyThema = 0;  // 1:내 테마, 0:남의 테마
    
    
    function movetoMap(event){
        console.log(event.target.id)

        if (window.localStorage.getItem('userID') == mythemaitem.thema_host) {
            MyThema = 1;
            console.log(MyThema);
          } else {
            MyThema = 0;
            console.log(MyThema);
          }

        sessionStorage.setItem("thema_id",event.target.id)
        document.location.href = `/Createtheme?host=${MyThema}`
    }

    return(
        <div className="theme" id={target_thema} onClick={movetoMap}>
            <div className="themeName"  >{mythemaitem.thema_name}</div>
            <div className="themeExplain">{mythemaitem.thema_explain}</div>
        </div>
    )
}

export default MythemaItem;

