import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Drink from '../Drink.png'
import SearchForm from './SearchForm'

const Navbar = () => {
  return <>
    <nav className='topnav'>
        <div className='active'>
            <div className='logo'>
                <Link to='/'>
                    <img src={Drink} className='logo' alt='Title'></img>
                </Link>
            </div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Outlet /> 
                <div className='SearchForm'>
                  <SearchForm />
                </div>
        </div>
    </nav>
  </>
}

export default Navbar