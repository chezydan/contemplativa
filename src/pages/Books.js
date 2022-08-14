
import React from 'react'
import {books} from '../data/biblioData'
import Book from '../components/Book'

function Books() {

const allBooks = books;
  return (<>
    
      <h3 className='title'>Libros Seleccionados</h3>
      <p className='explanation'> A continuación se describen una serie de libros que constituyen la base del material 
        de los podcasts, el método y el contenido transmitido y practicado en los grupos de trabajo </p>
        <br/>

       <div className='books-container'>
    {allBooks.map( (itm)=>{
      return( <div>
    <Book  itm={itm}  />
   
    </div>  )
  } ) }
  </div>
    </>
  )
}

export default Books