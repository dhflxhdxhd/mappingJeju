import axios from 'axios';
import React, { useState } from 'react';
import '../New.css';

const Maketheme = () => {

    const [inputs, setInputs] = useState({
        thema_name : '',
        thema_explain : ''
    })

    const [checkedItem, setCheckedItem] = useState(false)
    
    const {thema_name, thema_explain} = inputs;

    const handleChange = (event) => {
        const {value, name} = event.target;

        setInputs({
            ...inputs,
            [name]:value
        });
    };

    console.log(checkedItem);
    const handleChecked = (event) => {

       if(event.target.checked){
           setCheckedItem(true);
       }else{
           setCheckedItem(false);
       }

       console.log(checkedItem);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputs.thema_name);
        console.log(checkedItem);

        let form = new FormData()
        form.append('thema_name', inputs.thema_name)
        form.append('thema_explain',inputs.thema_explain)
        form.append('share', checkedItem)

        axios.post(`/thema/sendThema`,form)
        .then(response => {
            console.log('response', response)
            console.log('response', response.data)
            document.location.href = "/Createtheme"
        }).catch(error => {
            console.log('failed!', error)
        })
    
            
    }
  return (
    <div className="inputm-wrapper">
        <div className="inputthemedata">
            <form onSubmit={handleSubmit}>
            <div className="titletheme">
                <span className="makethemetext">테마 지도 이름</span>
                <input name="thema_name" value={thema_name} onChange={handleChange} type="text" className="inputthemetitle" />    
            </div>
            <div className="explaintheme">
                <span className="makethemetext">테마 지도 설명</span>
                <textarea name="thema_explain" value={thema_explain} onChange={handleChange} type="text" className="inputthemeexplain" placeholder="후기, 주차 장소, 꿀팁 등"/>    
            </div>
            <div className="shareswitch">
                <span className="sharetext">다른 사람과 테마 지도 공유</span>
                <div className="tg">
                    <ul className="tg-list">
                        <li className="tg-list-item">
                            <input className="tgl tgl-light" id="cb1" type="checkbox"  name="share" onChange={handleChecked}/>
                            <label className="tgl-btn" htmlFor="cb1"></label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="createtheme">
                <button type="submit" className="createthemebutton">생성하기</button>
            </div>
            </form>
        </div>
  </div>
  );
}

export default Maketheme;