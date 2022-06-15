import React from 'react';
import '../App.css';
import ZzimListItem from './zzimListItem';

function ShowzzimList({zzimitems}){
    return (
        <div className="viewmytheme" >
            {zzimitems.map((zzimitem,index) => 
                <ZzimListItem  key={index} zzimitem = {zzimitem}/>
            )}
        </div>
    )
}

export default ShowzzimList;

