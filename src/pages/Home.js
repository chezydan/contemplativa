import {Link} from 'react-router-dom'
import ModalHome from '../components/ModalHome'
import { useState } from 'react'
import {FaInstagram} from 'react-icons/fa'

const Home = () => {
  const [showModal,setShowModal] = useState(true)
  const heroimg="https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"   

  
  

    return (< >
      <section className='section-home hero-image'>
        <button onClick={() => setShowModal(true)}
        className='modalButton'>          Modal         </button>
        {<ModalHome show={showModal}
        onClose={()=> setShowModal(false)}        />}
        <h1 className ='main-title'
               
        > La Página de Contemplativa </h1>
<h3> nuevo en contemplativa :</h3>
<p>generador de frases  </p>
< Link to='/quotes'  > generador aleatorio de frases</Link>
      <div>
{/*<img src={heroimg} alt='hero'/> */}
</div>

<br></br>
<br></br>
<div>
<h3> Meditación Deconstructiva</h3>
{<FaInstagram className='p-fa'/>}

Ideas inspiradoras y actualizaciones en el Instagram de
 <a href="https://www.instagram.com/meditaciondeconstructiva/?hl=es" target='_blank'> Meditación Deconstructiva </a>
<h4> Comunidad para el aprendizaje y desarrollo de técnicas meditativas en psicología clínica</h4>

<img  className='--img-right'
src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Ornate-Dharma-Wheel.svg" alt='dharmachakra' />
<ul>


 Contenidos sobre presencia, aceptación, sufrimiento y otros temas
<li>
 Reflexiones sobre la práctica meditativa</li><li> 
 Consejos par la práctica</li><li>
 Actualizaciones  sobre la actividad de los grupos de trabajo</li>
 </ul> 
... y más en esta página Instagram de Meditación Deconstructiva
</div>
<br></br>
<br></br>
<br></br>

</section>
      </>
    );
  };
  export default Home;