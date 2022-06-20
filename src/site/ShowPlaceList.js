import React from 'react';
import '../App.css';
import PlaceItem from './PlaceListItem';

function ShowPlaceList({placeitems, themahost}){
    return (
        <div className="explainplace" >
            {placeitems.map((placeitem,index) => 
                <PlaceItem  key={index} placeitem={placeitem} themahost={themahost}/>
            )}
        </div>
    )
}

export default ShowPlaceList;