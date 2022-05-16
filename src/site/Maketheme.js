import React from 'react';
import { Link } from 'react-router-dom';
import '../New.css';

const Maketheme = () => {

  return (
    <div className="inputm-wrapper">
        <div className="inputthemedata">
            <div className="titletheme">
                <span className="makethemetext">테마 지도 이름</span>
                <textarea className="inputthemetitle"></textarea>   
            </div>
            <div className="explaintheme">
                <span className="makethemetext">테마 지도 설명</span>
                <textarea className="inputthemeexplain" placeholder="후기, 주차 장소, 꿀팁 등"></textarea>   
            </div>
            <div className="shareswitch">
                <span className="sharetext">다른 사람과 테마 지도 공유</span>
                <div className="tg">
                    <ul className="tg-list">
                        <li className="tg-list-item">
                        <input className="tgl tgl-light" id="cb1" type="checkbox"/>
                        <label className="tgl-btn" htmlFor="cb1"></label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="createtheme">
                <button className="createthemebutton"><Link to="/Createtheme">생성하기</Link></button>
            </div>
        </div>
  </div>
  );
}

export default Maketheme;