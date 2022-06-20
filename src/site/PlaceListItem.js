import React, {useState} from 'react';
import Registerplace from './Registerplace'
import PlaceInfoModal from "./PlaceInfoModal";
import '../New.css';

function PlaceItem({placeitem}){
    console.log(placeitem)
    const [modalOpen, setModalOpen] = useState(false)
    const closeModal = () => {
        setModalOpen(false)
    }
    const openModal = () => {
        setModalOpen(true)
    }

    return(
        <><div className="place" onClick={openModal}>
            <div className="placeName">{placeitem.place_name}</div>
        </div>
        <Registerplace open={modalOpen} close={closeModal} header={placeitem.place_name} >
            <PlaceInfoModal place={placeitem} />
        </Registerplace></>
    )
}

export default PlaceItem;