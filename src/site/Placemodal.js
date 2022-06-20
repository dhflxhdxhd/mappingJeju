import axios from 'axios';
import React, {useState} from 'react';
import '../New.css';

const Placemodal = (props) => {
    const {lat, lng, place_id, place_name, place_explain, place_photos, isEdit} = props
    console.log(props)

    // 배열이 비었는지 확인
    const isEmptyArr = (arr) => {
        if(isEdit) {
            if(Array.isArray(arr) && arr.length === 0)  {
                return true;
            }
            return false;
        }
        return true;
        
    };

    // console.log(props)
    const [showImages, setShowImages] = useState(isEmptyArr(place_photos) ? [] : [place_photos[0].substr(1)])
    const [images, setImages] = useState([])

    const [inputs, setInputs] = useState({
        name : place_name,
        explain : place_explain
    })
    const {name, explain} = inputs;

    const handleChange = (event) => {
        const {value, name} = event.target;
        console.log(event.target)
        setInputs({
            ...inputs,
            [name]:value
        });
    };

    // 장소 생성
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("생성합니다")

        const thema_id = sessionStorage.getItem('thema_id')
        let form = new FormData()
        form.append('thema_id',thema_id )
        form.append('place_name', inputs.name)
        form.append('explain',inputs.explain)
        form.append('lat', lat)
        form.append('lng', lng)
        // form.append('photos', images)
        for (let i = 0; i < images.length; i++) { 
            form.append('photos', images[i].uploadedFiles)
         }
        for (var pair of form.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        axios.post(`/thema/sendPlace`, form)
        .then(response => {
            console.log('response', response)
            document.location.href = "/Createtheme?host=1"
        }).catch(error => {
            console.log('failed!', error)
        })            
    }

    // 장소 수정
    const handleUpdate = (event) => {
        event.preventDefault();
        console.log("수정합니다")

        let form = new FormData()
        form.append('place_name', inputs.name)
        form.append('explain', inputs.explain)
        form.append('place_id', place_id)
        // form.append('photos', place_photos)
        for (let i = 0; i < images.length; i++) { 
            form.append('photos', images[i].uploadedFiles)
         }
         for (var pair of form.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        
         axios.post(`/thema/updatePlace`, form)
        .then(response => {
            console.log('response', response)
            document.location.href = "/Createtheme?host=1"
        }).catch(error => {
            console.log('failed!', error)
        }) 
    }

    // 이미지 경로 저장
    const handleAddImages = (event) => {
        const imageLists = event.target.files;
        let imageUrlLists = [...showImages];

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
        }

        if (imageUrlLists.length > 10) {
            imageUrlLists = imageUrlLists.slice(0, 10);
        }
        setImages([...images, {uploadedFiles: imageLists[0]}])
        setShowImages(imageUrlLists)
        console.log(showImages)
        console.log(images)
    };

    // X버튼 클릭 시 이미지 삭제
    const handleDeleteImage = (id) => {
        setShowImages(showImages.filter((_, index) => index !== id));
        setImages(images.filter((_, index) => index !== id));
    };

    // 업데이트일 때, photos에 사진이 있으면 showimages에 저장
    // const setUpdateImages = () => {
    //     if (!isEmptyArr(place_photos)) {

    //     }
    // }

    return(     
        <>
            <div className="modaldata">
                <form onSubmit={!isEdit ? handleSubmit : handleUpdate} encType="multipart/form-data">
                    <div className="placename">
                        <span className="placename">장소 이름</span>
                        <input name="name" type="text" className="placenamebox" defaultValue={name} onChange={handleChange}></input>
                    </div>
                    <div>
                        <span className="picregist">사진 등록</span>
                        <label className="picpluslabel" htmlFor="image-file" onChange={handleAddImages}>
                            <input type="file" id="image-file" multiple className="picinput" />
                            <span className="picplus"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="plus-lg" viewBox="-7 -7 20 20">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" /></svg></span>
                        </label>
                        
                        <div className="picwrapper">
                            {// 저장해둔 이미지들을 순회하면서 화면에 이미지 출력
                            showImages.map((image, id) => (
                                <span className="piccontainer" key={id}>
                                    <img className="pic" src={image} alt={`${image}-${id}`} />
                                    <button className="picdelete" onClick={() => handleDeleteImage(id)}><svg xmlns="http://www.w3.org/2000/svg" className="delete-lg" viewBox="0 0 50 50" width="20px" height="20px">
                                    <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"/><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"/></svg></button>
                                </span>
                            ))}   
                        </div>
                                        
                    </div>
                    <div className="placeexplain">
                        <span className="placeexplaintext">장소 설명</span>
                        <input name="explain" type="text" className="placeexplainbox" defaultValue={explain} onChange={handleChange} placeholder="꿀팁, 가는 길..."></input>
                    </div>
                    <div className="createplace">
                        {!isEdit ? 
                        <button type="submit" className="createbutton" >생성하기</button> 
                        : <button type="submit" className="updatebutton" >수정하기</button>
                        }
                    </div>
                </form>
            </div>            
        </>
    )
}

export default Placemodal