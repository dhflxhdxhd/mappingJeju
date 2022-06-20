import axios from 'axios';
import React, {useState} from 'react';
import '../New.css';

const PlaceInfoModal = ({place}) => {
    // let photos = place.photos.split(',')
    // const [showImage, setShowImage] = useState(photo);
    // console.log(showImage)
    let photo = place.photos
    console.log(place)

    const isEmptyArr = (arr) => {
        if(Array.isArray(arr) && arr.length === 0)  {
          return true;
        }
        return false;
      }

    return(
        <div className='modaldata'>
            {// 저장해둔 이미지들을 순회하면서 화면에 이미지 출력
            isEmptyArr(photo) ? null : 
            <div className='picwrapper'>
                <div className="pic-text">사진</div>
                <span className="piccontainer">
                    <img className="pic" src={photo[0].substr(1)} alt={`${photo[0]}`} />
                </span>
            </div>
            }
            <div className="placeexplain">
                <span className="placeexplaintext">장소 설명</span>
                <input name="explain" type="text" className="placeexplainbox" defaultValue={place.explain}  placeholder="꿀팁, 가는 길..."></input>
            </div>
        </div>
    )
}

export default PlaceInfoModal