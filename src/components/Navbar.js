import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const  [extendNavbar, setExtendNavbar]   =useState(false)
  return (<>
 
    <nav className='--nav'>
    <div className='inner-container' >
      <div className='left-container'>

    
{/* <div>   <h4 className='webTitle'>Ciencia Contemplativa</h4></div> */}
              <div className='link-container'>
                <Link to ="/" className='nav-link'>   Principal</Link>
                <Link to ="/podcast" className='nav-link'>   podcast</Link>
                <Link to ="/resources" className='nav-link'>   recursos</Link>
                < Link to='/quotes' className='nav-link' > frases </Link>
                <Link to ="/contact" className='nav-link'>   contactar</Link>
              </div>
              <div className='open-link-button'
              onClick={()=>{ setExtendNavbar((cur)=>!cur)   } }>
              {extendNavbar? <>&#10005;</> : <> &#8801;</>} 
                </div>
          </div>

                <div className='right-container'  >
                <p>Contemplativa</p>
                
                </div>
      
          
      </div>

      {extendNavbar && (
      <div className='extended-container'
      onClick={()=>{ setExtendNavbar((cur)=>!cur)   } } >        
      <Link to ="/" className='link-extended-container'>   principal</Link>
                <Link to ="/podcast" className='link-extended-container'>   podcast</Link>
                <Link to ="/resources" className='link-extended-container'>   recursos</Link>
                < Link to='/quotes' className='link-extended-container' > frases </Link>
                <Link to ="/contact" className='link-extended-container'>   contactar</Link>
        

      </div> ) } 
    </nav>
    </>
  )
}

export default Navbar
  
/*

? why flex right 30% not working?

        --nav
            .iner-container
                  .left-container
                      .link-container
                          .link
                          .link
                          .link
                        
                          .link- button
                  .right-container


            .extended-container  (if extendedNavbar)
                      .link
                      .link
*/