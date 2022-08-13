
import React from 'react'
import {books} from '../data/biblioData'
import Book from '../components/Book'

function Books() {

const allBooks = books;
  return (<>
    <div>Books   Books</div>
    <div >
    <Book allBooks={allBooks}    />
</div>    

    </>
  )
}

export default Books