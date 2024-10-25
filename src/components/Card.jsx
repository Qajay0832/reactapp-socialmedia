import React from 'react'
import './Card.css'
import arrow from '../assets/arrow.png'
import { useNavigate } from 'react-router-dom'

const Card = ({cardDetails}) => {
    const navigate=useNavigate();
    const wordCount =cardDetails.body.split('').length
    const handleDetail=()=>{
        navigate(`/item/${cardDetails.id}`)
    }
    
  return (
    <div className='cardContainer'>
        <img className='cardImg' src={`https://picsum.photos/200?random=${cardDetails.id}`} alt='image'/>
        <div className='cardDetails'>
            <div>
            <p className='cardTitle'>{cardDetails.title}</p>
            <p className='cardBody'>{cardDetails.body.slice(0,100)}<p className='cardLink' onClick={handleDetail}>...Read more</p></p>
            </div>
            <img className='arrowBtn' onClick={handleDetail} src={arrow} alt='-->'/>
        </div>
    </div>
  )
}

export default Card