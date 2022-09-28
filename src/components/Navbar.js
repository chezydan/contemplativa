import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (<>
 
    <nav className='--nav'>
 <div>   <h4 className='webTitle'>Ciencia Contemplativa</h4></div>
        <Link to ="/" className='nav-link'>   Principal</Link>
        <Link to ="/podcast" className='nav-link'>   podcast</Link>
        <Link to ="/resources" className='nav-link'>   recursos</Link>
        < Link to='/quotes' className='nav-link' > frases </Link>
        <Link to ="/contact" className='nav-link'>   contactar</Link>
    </nav>
    </>
  )
}

export default Navbar
  