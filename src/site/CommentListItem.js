import React, {useState} from 'react';
import '../New.css';
import {Card, CardBody} from 'reactstrap';

function CommentItem({commentitem}){

    return (
        <><Card style={{ width: "80%", marginLeft: "20px", marginTop: "1px" }}>
            <CardBody>{commentitem[1]}</CardBody>
        </Card></>
    )
}

export default CommentItem;