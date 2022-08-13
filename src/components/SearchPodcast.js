import React , {useState} from 'react'

function SearchPodcast({propTargetText, handleSearch}) {



  return (
    <div className='nav-search'>        
        <label htmlFor='podcastSearch' className='lblSearch' > temas:</label>
        <input type="text" className='inpSearch'
        id='podcastSearch'
        placeholder='comenzar búsqueda'
       // value={targetText}  
        onChange={(event)=>handleSearch(event.target.value)}/>

        <div className='spanTheme' id="pensamiento"
        
        onClick={(e)=>{handleSearch(e.target.id ) } } >pensamientos</div>
        <div className='spanTheme' id="sufrimiento" 
        onClick={(e)=>{handleSearch(e.target.id ) } }>sufrimiento</div>
        <div className='spanTheme'  id="aceptación"
        onClick={(e)=>{handleSearch(e.target.id ) } }>aceptación</div>
          <div className='spanTheme'  id=" "
        onClick={(e)=>{handleSearch(e.target.id ) } }>-Todos-</div>
    </div>
  )
}


export default SearchPodcast