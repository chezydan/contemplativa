import React , {useState} from 'react'

function SearchPodcast({propTargetText, handleSearch}) {



  return (
    <side>        
        <label htmlFor='podcastSearch' className='lblSearch' > temas:</label>
        <input type="text" className='inpSearch'
        id='podcastSearch'
        placeholder='comenzar búsqueda'
       // value={targetText}  
        onChange={(event)=>handleSearch(event.target.value)}/>
    </side>
  )
}


export default SearchPodcast