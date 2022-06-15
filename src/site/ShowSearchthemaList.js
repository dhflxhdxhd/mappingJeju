import React from 'react';
import '../App.css';
import SearchthemaItem from './SearchthemaListItem';
import keyword from './Main';

function ShowSearchthemaList({searchthemaitems}){

    return (
        <div className="viewsearchtheme" >
            {searchthemaitems.map((searchthemaitem) => 
                <SearchthemaItem keyword={keyword} searchthemaitem = {searchthemaitem}/>
            )}
        </div>
    )
}

export default ShowSearchthemaList;

