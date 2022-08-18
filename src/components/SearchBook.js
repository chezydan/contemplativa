import React , {useState} from 'react'


function SearchBook({authors, propTargetAuthor, handleTargetAuthor }) {

const authorsof =['Mozart', 'Sibelius', 'Brahms']
const newAuthors= [... new Set ( authors) ]

  return (
    <div className='nav-search'>        
    {console.log(authors, newAuthors)}
        <label htmlFor='podcastSearch' className='lblSearch' > temas:</label>
        <input type="text" className='inpSearch'
        id='bookSearch'
        placeholder='no funcional momentaneamente'
       // value={targetText}  
      //  onChange={(event)=>handleSearch(event.target.value)}/>
/>
        <label className='lblSearch' >autor</label>
<select 
onChange={(e)=> handleTargetAuthor(e.target.value)}>
    {authors.map( (author)=>{
        return(
          <option value={author} > {author} </option> )    }//callback
      ) }
      </select>
    </div>
  )
}


export default SearchBook