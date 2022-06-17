import React from "react";
import '../App.css'; 

function SearchthemaItem({searchthemaitem}){

    let target_thema = searchthemaitem["_id"]["$oid"]
    
    function movetoMap(event){
        console.log(event.target.id)

        sessionStorage.setItem("thema_id",event.target.id)
        document.location.href = "/Createtheme"
    }

    return(
        <div className="theme" id={target_thema} onClick={movetoMap}>
            <div className="themeName"  >{searchthemaitem.thema_name}</div>
            <div className="themeExplain">{searchthemaitem.thema_explain}</div>
        </div>
    )
}

export default SearchthemaItem;

