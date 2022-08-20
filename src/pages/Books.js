
import React ,{useState} from 'react'
import {books} from '../data/biblioData'
import Book from '../components/Book'
import SearchBook from '../components/SearchBook';
function Books() {

const [targetAuthor, setTargetAuthor]=useState(' ')
const allBooks = books;
const authors = [" ",... new Set ( allBooks.map(book=>book.author)  ) ].sort()

  return (<>
    <SearchBook authors={(authors)}
    handleTargetAuthor={setTargetAuthor}
    propTargetAuthor={targetAuthor}/>    
      <h3 className='title'>Libros Seleccionados</h3>
      <p className='explanation'> A continuación se describen una serie de libros que constituyen la base del material 
        de los podcasts, el método y el contenido transmitido y practicado en los grupos de trabajo </p>
        <br/>

       <div className='books-container'>
    {allBooks.map( (itm)=>{
      return( <>
        {itm.author===targetAuthor && <Book  itm={itm}     />  }
        {targetAuthor===" " && <Book  itm={itm}     />  }
   
    </>  )
  } ) }
  </div>
    </>
  )
}

export default Books