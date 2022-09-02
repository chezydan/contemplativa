import React ,{useState} from 'react'
import {quotesData} from '../data/QuotesData'
import {FaQuoteLeft , FaQuoteRight,FaBook,FaLightbulb} from 'react-icons/fa'

function Quotes() {
  const [quote , setQuote ] =useState("");
  
 return (<div className='quotes-general'>
 
 <h2> Generador aleatorio de fases y citas </h2>
<br></br>

<p>  <FaLightbulb className='p-fa' /> Al pulsar se puede extraer una frase para pensar y aplicar sobre las temáticas
  del conocimiento contemplativo
</p><br></br>
<br></br>
<p>{<FaBook className='p-fa' />}
frases, parte del contenido citado en los Podcasts en el tema de los fundamentos de los cuales emana la práctica contemplativa y otras frases sabias pertinentes que nos pueden inspirar en el pensamiento y la acción.</p>

<br></br>
<br></br>
     
     <button className='btn-quote'
    onClick= {  ()=>setQuote(quotesData[Math.floor(Math.random()*quotesData.length)])  }   >
    <span className='span-quotes'>{<FaQuoteLeft />}  ------{<FaQuoteRight />}</span>
      </button>
      <br></br>
      <br></br>
<div className='container-quotes'>

    <blockquote class="quote" > <q className='quote'>
    {quote.quote}  </q></blockquote>
    <br></br>
    <br></br>
    <br></br>
  <h3 className='quote-author'>{quote.author}</h3>

</div>


</div>
  )
}

export default Quotes