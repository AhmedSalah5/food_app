import React from 'react'

import {ImSpoonKnife} from 'react-icons/im'

function Navbar() {
  return (
    <nav className='top-nav'>
        <a className='logo' href='/'>
            FO
            <ImSpoonKnife/>
            OD
        </a>
    </nav>
  )
}

export default Navbar