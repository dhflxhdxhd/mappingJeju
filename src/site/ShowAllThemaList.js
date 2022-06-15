import React from 'react';
import '../App.css';
import AllthemaItem from './AllthemaListItem';

function ShowAllthemaList({allthemaitems}){
    return (
        <div className="viewalltheme" >
            {allthemaitems.map((allthemaitem,index) => 
                <AllthemaItem  key={index} allthemaitem = {allthemaitem}/>
            )}
        </div>
    )
}

export default ShowAllthemaList;

