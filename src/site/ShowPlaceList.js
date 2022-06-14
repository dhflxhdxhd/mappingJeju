import React from 'react';
import '../App.css';
import PlaceItem from './PlaceListItem';

function ShowPlaceList({placeitems}){
    return (
        <div className="explainplace" >
            {placeitems.map((placeitem,index) => 
                <PlaceItem  key={index} placeitem = {placeitem}/>
            )}
        </div>
    )
}

export default ShowPlaceList;