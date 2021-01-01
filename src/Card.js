import { sr } from 'date-fns/locale'
import React from 'react'
import './card.css'

function Card({data}) {
    const {id,title,description,src,price}=data
    return (
        <div className="card">
            <img src={src} alt={title}/>
            <div className="card_info">
                <div className="card_title"> 
            <h2> {title} </h2>
            <span> {price}</span>
            </div>
            <p> {description}</p>
            </div>
        </div>
    )
}

export default Card
