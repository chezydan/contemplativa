

import React from 'react'

function Book({allBooks}) {
  return (
    <div className='books-container'>
    {allBooks.map( (itm)=>{
        const {id,title, author,desc,url,img,lang,temas} = itm;
        return (<div className='book' >
                <h3>{title}</h3>
                <p>{author}</p>
                {url!==""&& <a href={url} target='blank'> info</a>  }
                {desc!=="" && <p className='temas'>{desc }</p>}
        </div>)           

    } ) }
    </div>
  )


}

export default Book