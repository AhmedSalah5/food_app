import React from 'react'
import { Link } from 'react-router-dom'
import {ImSpoonKnife} from 'react-icons/im'

function Header() {
  return (
    <nav className='top-nav'>
        <Link to="/" className="logo">
            <ImSpoonKnife />
            <span>FoodOn</span>
        </Link>
        test
    </nav>
  )
}

export default Header