import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='--nav'>
        <Link to ="/" >   Home</Link>
        <Link to ="/podcast" >   podcast</Link>
        <Link to ="/resources" >   recursos</Link>
        <Link to ="/contact" >   contactar</Link>

< Link to='/quotes'  > frases </Link>
    </nav>
  )
}

export default Navbar
  