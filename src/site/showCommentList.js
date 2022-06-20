import React from 'react';
import '../App.css';
import CommentItem from './CommentListItem';

function ShowCommentList({commentitems}){
    return (
        <div className='wrap_comments'>
            {commentitems.map((commentitems, index) => 
                <CommentItem  key={index} commentitem={commentitems}/>
            )}
        </div>
    )
}

export default ShowCommentList;