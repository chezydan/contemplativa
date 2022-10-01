import React ,{useState} from 'react'
import {quotesData} from '../data/QuotesData'
import {FaQuoteLeft , FaQuoteRight,FaBook,FaLightbulb} from 'react-icons/fa'

function Quotes() {
  const [quote_ , setQuote ] =useState("");
  const [ind, setInd]   = useState(0)

 
 return (<div className='section  hero-image-white-door quotes-general'>
 <h2> Generador aleatorio de frases y citas </h2>

<p className='rtl'>זה אתר שמיועד לתת פתרונות להדריךת , לספק כלים לומד</p>


<p>  <FaLightbulb className='p-fa' /> Al pulsar se puede extraer una frase para pensar y aplicar sobre las temáticas
  del conocimiento contemplativo
</p><br></br>
<br></br>
<p>{<FaBook className='p-fa' />}
frases, parte del contenido citado en los Podcasts en el tema de los fundamentos de los cuales emana la práctica contemplativa y otras frases sabias pertinentes que nos pueden inspirar en el pensamiento y la acción.</p>

<hr />
<br></br>
     
     <button className='btn-quote'
    onClick= { ()=>{
      const ind=Math.floor(Math.random()*quotesData.length);
      setQuote(quotesData[ind]) 
    setInd(ind) }   }>
    <span className='span-quotes'>{<FaQuoteLeft />}  ------{<FaQuoteRight />}</span>
      </button>
      <br></br>

<div className='container-quotes'>

    <blockquote class="quote" > <q className={ quotesData[ind].length>55?'quote-large quote':'quote'}>
    {quote_.quote} </q></blockquote>
   
  <h3 className='quote-author'>{quote_.author}    </h3>

</div>


</div>
  )
}

export default Quotes