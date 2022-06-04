import React from "react";
import '../App.css';

function MythemaItem({mythemaitem}){

    console.log(mythemaitem)
    return(
        <div className="theme">
            <div className="themeName">{mythemaitem.thema_name}</div>
            <div className="themeExplain">{mythemaitem.thema_explain}</div>
        </div>
    )
}

export default MythemaItem;

