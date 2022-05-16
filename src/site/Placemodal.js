import React, {useState} from 'react';
import '../New.css';

const Placemodal = (props) => {
    const {lat, lng, place_name} = props
    return(     
        <>
            <div className="modaldata">
                <div className="placename">
                    <span className="placename">장소 이름</span>
                    <input type="text" className="placenamebox" text={place_name}></input>
                </div>
                <div>
                    <span className="picregist">사진 등록</span>
                    <div className="pic"></div>
                    <div className="picplusdiv">
                        <button className="picplus"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="plus-lg" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" /></svg></button>
                    </div>
                </div>
                <div>
                    <span className="placeexplain">장소 설명 ex)꿀팁, 가는 길...</span>
                    <input type="text" className="placeexplainbox"></input>
                </div>
            </div>
            <button className="createbutton">생성하기</button>
        </>
    )
}

export default Placemodal