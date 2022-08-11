import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context'

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext()
    const searchValue = React.useRef('')

    const searchDrinks = () =>{
        setSearchTerm(searchValue.current.value)
    } 

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    useEffect(()=>{
        searchValue.current.focus()
    },[])


  return (
      <section>
         <form onSubmit={handleSubmit}>
            <div>
                <input type='text' ref={searchValue} placeholder='Enter Drink Name' onChange={searchDrinks}></input>
            </div>
         </form>
      </section>
  )
}

export default SearchForm