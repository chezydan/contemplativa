import {Link} from 'react-router-dom'
import ModalHome from '../components/ModalHome'
import { useState } from 'react'

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
<br></br>
<br></br>
<br></br>

</section>
      </>
    );
  };
  export default Home;