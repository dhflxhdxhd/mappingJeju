import React from "react";


function Spinner(){
    return(
        <div className="spinner-wrapper">
            <div className="spinner">
                <i className="fas fa-spinner fa-10x fa-spin" style={{width : "0.5em"}}></i>
            </div>
        </div>
    )
}

export default Spinner;

