import React from 'react'
import Err from '../Err.jpg'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <section className='section'>
      <center>
        <h3 className='error-page'>Oops! Something WentWrong</h3>
        <img src={Err} alt='Not Found' className='error-container' />
        <Link to='/' className='btn'>Back To HomePage</Link> 
      </center>
   </section>
  )
}

export default Error