import React from "react";
import '../App.css'; 
import handleBookmark from "./bookmark";

function SearchthemaItem({searchthemaitem}){

    let target_thema = searchthemaitem["_id"]["$oid"]
    let MyThema = 0;  // 1:내 테마, 0:남의 테마
    
    function movetoMap(event){
        console.log(window.localStorage.getItem('userID'))
        console.log(searchthemaitem.thema_host)

        if (window.localStorage.getItem('userID') == searchthemaitem.thema_host) {
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
            <div className="aligntheme">
                <div className="themeName"  >{searchthemaitem.thema_name}</div>
                <div className="themeExplain">{searchthemaitem.thema_explain}</div>
                <button className="bookmark" onClick={handleBookmark}>bookmark</button>
            </div>
        </div>
    )
}

export default SearchthemaItem;

