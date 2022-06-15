import React from "react";
import '../App.css';


function ZzimListItem({zzimitem}){

    console.log("zzimitem",zzimitem)
    let target_zzim = zzimitem["_id"]["$oid"]
    console.log("target_zzim",target_zzim)
    
    
    function movetoMap(event){
        console.log("event.target.id",event.target.id)

        sessionStorage.setItem("thema_id",event.target.id)
        document.location.href = `/Createtheme?host=${0}`
    }

    return(
        <div className="theme zzim_thema" id={target_zzim} onClick={movetoMap}>
            <div className="themeName zzimName"  >{zzimitem.thema_name}</div>
            <div className="themeExplain zzimExplain">{zzimitem.thema_explain}</div>
        </div>
    )
}

export default ZzimListItem;

