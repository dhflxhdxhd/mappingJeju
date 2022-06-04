import React from 'react';
import '../App.css';
import MythemaItem from './MythemaListItem';

function ShowMythemaList({mythemaitems}){
    return (
        <div className="viewmytheme" >
            {mythemaitems.map((mythemaitem,index) => 
                <MythemaItem  key={index} mythemaitem = {mythemaitem}/>
            )}
        </div>
    )
}

export default ShowMythemaList;

