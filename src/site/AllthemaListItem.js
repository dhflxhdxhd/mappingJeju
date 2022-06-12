import React from "react";
import '../App.css';

function AllthemaItem({allthemaitem}){

    let target_thema = allthemaitem["_id"]["$oid"]

    function movetoMap(event){
        console.log(event.target.id)

        sessionStorage.setItem("thema_id",event.target.id)
        document.location.href = "/Createtheme"
    }

    return(
        <div className="theme" id={target_thema} onClick={movetoMap}>
            <div className="themeName">{allthemaitem.thema_name}</div>
            <div className="themeExplain">{allthemaitem.thema_explain}</div>
        </div>
    )
}

export default AllthemaItem;

