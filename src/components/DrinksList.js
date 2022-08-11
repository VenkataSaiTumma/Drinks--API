import React from 'react'
import Drinks from './Drinks.js'
import Loading from './Loading'
import { useGlobalContext } from '../Context'

const DrinksList = () => {
  const { cocktails, loading } = useGlobalContext()
  
  if (loading) {
    return <Loading/>
  }

  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        No Matches Found
      </h2>
    )
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Available Drinks</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Drinks key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default DrinksList