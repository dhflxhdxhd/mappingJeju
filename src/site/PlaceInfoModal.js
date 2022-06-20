import axios from 'axios';
import React, {useState, useEffect} from 'react';
import '../New.css';
import ShowCommentList from './showCommentList';

const PlaceInfoModal = ({place}) => {
    let photo = place.photos
    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState([])

    const isEmptyArr = (arr) => {
        if(Array.isArray(arr) && arr.length === 0)  {
          return true;
        }
        return false;
    }

    const handleChange = (e) => {
        setComment(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let form = new FormData()
        form.append('place_id', place._id.$oid)
        form.append('place_comment', comment)

        axios.post(`/thema/creatComment`, form)
        .then(response => {
            console.log('response', response)
        }).catch(error => {
            console.log('failed!', error)
        }) 

        setComment(" ")
    }

    useEffect(()=>{
    
        const fetchComment = async() => {
            let form = new FormData()
            form.append('place_id', place._id.$oid)

            axios.post(`/thema/getComment`, form)
            .then(response => {
                console.log('response', response.data.result)
                setAllComments(response.data.result)
            }).catch(error => {
                console.log('failed!', error)
            })
        }
    
        fetchComment()
    
    },[comment]);

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
            <div className='placecomment'>
                <span className='placecommenttext'>댓글</span>
                <form onSubmit={handleSubmit}>
                    <input name="comment" maxLength='30' type="text" className="placecommentbox" defaultValue={comment} placeholder="댓글을 입력해주세요. (최대 30자)" onChange={handleChange}></input>
                    <button type="submit" className="commentbutton">입력</button>
                </form>
                <React.Fragment>
                    < ShowCommentList commentitems={allComments}/>
                </React.Fragment>
            </div>
        </div>
    )
}

export default PlaceInfoModal