import React from 'react';


const Avatar = (props) => {
    return (
        <img
            className='circle-img'
            src={props.img}
            alt="avatar.png" />
    )
}

export default Avatar