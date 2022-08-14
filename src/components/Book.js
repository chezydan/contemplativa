import React ,{ useState } from 'react'
import { FaLink, FaBook } from 'react-icons/fa'

function Book({itm}) {
 const [ showMore, setShowMore] = useState(false);
  const {id,title, author,desc,url,img,lang,temas} = itm;
  
       
       return (
<div className='book' key= {id} >
                <h3>{title} <FaBook /></h3>
                <p>{author}</p>
                {url!==""&& <a href={url} target='blank'><FaLink /> info</a>  }
                
                {desc!=="" && <p className='temas'>{showMore? desc 
                :desc.slice(0,80)+'. . .' } 
                <span className='readmore'
                onClick={ ()=>setShowMore(!showMore)}>{showMore ? 'leer menos':'ampliar' }
                </span>   </p>}
        </div>

       )           

    }
  
  


export default Book