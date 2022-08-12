import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='--nav'>
        <Link to ="/" >   Home</Link>
        <Link to ="/podcast" >   podcast</Link>
        <Link to ="/resources" >   recursos</Link>
    </nav>
  )
}

export default Navbar
