import React from "react";
import '../App.css';

function PlaceItem({placeitem}){

    console.log(placeitem)
    return(
        <div className="place">
            <div className="placeName">{placeitem.place_name}</div>
        </div>
    )
}

export default PlaceItem;