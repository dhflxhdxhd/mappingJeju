import React from "react";
import '../App.css'; 

function SearchthemaItem({mythemaitem}){

    let target_thema = mythemaitem["_id"]["$oid"]
    
    function movetoMap(event){
        console.log(event.target.id)

        sessionStorage.setItem("thema_id",event.target.id)
        document.location.href = "/Createtheme"
    }

    return(
        <div className="theme" id={target_thema} onClick={movetoMap}>
            <div className="themeName"  >{mythemaitem.thema_name}</div>
            <div className="themeExplain">{mythemaitem.thema_explain}</div>
        </div>
    )
}

export default SearchthemaItem;

