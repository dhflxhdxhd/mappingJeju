import axios from 'axios';
import React, { useState } from 'react';

const handleBookmark = (event) => {
    // console.log("it is bookmark");
    // console.log("themaID", event.target.parentElement.parentElement.id);
    console.log("themaID", event.target.parentElement.parentElement.parentElement.id);

    const thema_id = event.target.parentElement.parentElement.parentElement.id
    // console.log(thema_id);
    console.log(thema_id);
    let form = new FormData()
    form.append('thema_id',thema_id);
    

    axios.post(`/thema/addzzim`,form)
    .then(response => {
        console.log('response', response)
    }).catch(error => {
        console.log('failed!', error)
    })

    if(event.stopPropagation) event.stopPropagation();
    else event.cancelBubble = true;
}

export default handleBookmark;