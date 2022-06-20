import React, {useState} from 'react';
import Registerplace from './Registerplace'
import PlaceInfoModal from "./PlaceInfoModal";
import Placemodal from './Placemodal'
import '../New.css';
import axios from 'axios';

function PlaceItem({placeitem, themahost, Showing}){
    console.log(placeitem)

    // 장소 세부 정보 모달창
    const [modalOpen, setModalOpen] = useState(false)
    const closeModal = () => {
        setModalOpen(false)
    }
    const openModal = () => {
        setModalOpen(true)
    }

    // 장소 수정(update) 모달창
    const [umodalOpen, setUModalOpen] = useState(false)
    const u_closeModal = () => {
        setUModalOpen(false)
    }
    const u_openModal = () => {
        setUModalOpen(true)
    }
    // 장소 수정 모달 창에 넘길 위도, 경도, 장소 이름
    let placeId = placeitem._id.$oid,
        placeName = placeitem.place_name,
        placeExplain = placeitem.explain,
        placePhotos = placeitem.photos

    const deletePlace =(e) => {
        e.preventDefault()
        e.stopPropagation()
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
    const updatePlace = (e) => {
        e.preventDefault()
        e.stopPropagation()
        u_openModal()
    }

    return(
        <><div className="alignplace">
            <div className="place" onClick={openModal}>
              {Showing ? 
              <><span>
                  <button className="placedelete" onClick={deletePlace}><svg xmlns="http://www.w3.org/2000/svg" className="delete-lg" viewBox="0 0 50 50" width="20px" height="20px">
                  <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" /><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" /></svg></button>
              </span><span>
                  <button className="placeupdate" onClick={updatePlace}><svg height="20px" viewBox="0 0 48 48" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" /><path d="M0 0h48v48h-48z" fill="none" /></svg></button>
              </span></>
              : null}
            <div className="placeName">
                <div className="listplacename">{placeitem.place_name}</div>
            </div>
          </div>
        </div>
        <Registerplace open={modalOpen} close={closeModal} header={placeitem.place_name} >
            <PlaceInfoModal place={placeitem} />
        </Registerplace>
        <Registerplace open={umodalOpen} close={u_closeModal} header='장소 수정' >
            <Placemodal place_id={placeId} place_name={placeName} place_explain={placeExplain} place_photos={placePhotos} isEdit={true}/>
        </Registerplace></>
    )
}

export default PlaceItem;