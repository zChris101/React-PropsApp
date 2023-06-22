import React from 'react'
import Avatar from './Avatar'
import Detail from './Detail'

const Card = (props) => {
  return (
    <div>
        
        <div className='card'>
            <div className='top'>
                <h2 className='name'>{props.name}</h2>
                <Avatar img={props.pic} />
            </div>
            <Detail detailInfo={props.phone} />
            <Detail detailInfo={props.email} />
            
        </div>
    </div>
  )
}

export default Card