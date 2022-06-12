import React from 'react';
import '../App.css';
import AllthemaItem from './AllthemaListItem';

function ShowAllthemaList({allthemaitems}){
    return (
        <div className="viewalltheme" >
            {allthemaitems.map((allthemaitem) => 
                <AllthemaItem allthemaitem = {allthemaitem}/>
            )}
        </div>
    )
}

export default ShowAllthemaList;

