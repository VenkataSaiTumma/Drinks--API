import React from 'react'
import { Link } from 'react-router-dom'

const Drinks = ({ image, name, id, info, glass })=> {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <h6>{info}</h6>
        <Link to={`/singledrink/${id}`} className='btn btn-primary btn-details'>More Details</Link>
      </div>
    </article>
  )
}

export default Drinks