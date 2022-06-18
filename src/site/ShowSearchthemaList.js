import React from 'react';
import '../App.css';
import SearchthemaItem from './SearchthemaListItem';

function ShowSearchthemaList({searchthemaitems}){

    return (
        <div className="viewsearchtheme" >
            {searchthemaitems.map((searchthemaitem,index) => 
                <SearchthemaItem key={index} searchthemaitem = {searchthemaitem}/>
            )}
        </div>
    )
}

export default ShowSearchthemaList;

