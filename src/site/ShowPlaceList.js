import React from 'react';
import '../App.css';
import PlaceItem from './PlaceListItem';

function ShowPlaceList({placeitems, themahost, Showing}){
    return (
        <div className="explainplace" >
            {placeitems.map((placeitem,index) => 
                <PlaceItem  key={index} placeitem={placeitem} themahost={themahost} Showing={Showing}/>
            )}
        </div>
    )
}

export default ShowPlaceList;