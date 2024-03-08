import React from 'react'
import "./Card.css"
function Card({name,code}) {
  return (
    <div className='card'>
        <div className='set-color' style={{backgroundColor:code}}>
           
        </div>
        <div className='title-name'>
            <h1 className='text'>{code}</h1>
            <h3 className='text' style={{color :name}}>{name}</h3>
        </div>
    </div>
  )
}

export default Card
