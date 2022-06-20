import React, {useState} from 'react';
import Registerplace from './Registerplace'
import PlaceInfoModal from "./PlaceInfoModal";
import '../New.css';
import axios from 'axios';

function PlaceItem({placeitem, themahost}){
    console.log(placeitem)
    let MyThema = false;  // true:내 테마, false:남의 테마

    if (window.localStorage.getItem('userID') == themahost) {
        MyThema = true;
        console.log(MyThema);
    } else {
        MyThema = false;
        console.log(MyThema);
    }

    const [modalOpen, setModalOpen] = useState(false)
    const closeModal = () => {
        setModalOpen(false)
    }
    const openModal = () => {
        setModalOpen(true)
    }

    const deletePlace =(e) => {
        e.preventDefault();
        const thema_id = sessionStorage.getItem('thema_id')
        const place_id = placeitem._id.$oid
        let form = new FormData()
        form.append('thema_id', thema_id)
        form.append('place_id', place_id)

        axios.post(`/thema/deletePlace`, form)
        .then(response => {
            console.log('response', response)
            document.location.href = "/Createtheme?host=1"
        }).catch(error => {
            console.log('failed!', error)
        })   
    }

    return(
        <><div className="alignplace">
            <div className="place" onClick={openModal}>
                {MyThema ? 
                <span>
                    <button className="picdelete" onClick={deletePlace}><svg xmlns="http://www.w3.org/2000/svg" className="delete-lg" viewBox="0 0 50 50" width="10px" height="10px">
                    <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"/><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"/></svg></button>
                </span>
                : null}
                <div className="placeName">
                    <div className="listplacename">{placeitem.place_name}</div>
                </div>
            </div>
        </div>
        <Registerplace open={modalOpen} close={closeModal} header={placeitem.place_name} >
            <PlaceInfoModal place={placeitem} />
        </Registerplace></>
    )
}

export default PlaceItem;