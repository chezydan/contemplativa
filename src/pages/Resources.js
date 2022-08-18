import {Link} from 'react-router-dom'
import {FaBook , FaHourglass, FaDownload} from 'react-icons/fa'
const Resources = () => {
    return (
      <section className='section'>
        <h3 className='title'> Recursos</h3>
        <p>
        <Link  to="/books" className='link-res'>  <FaBook /> Libros</Link>  </p><p>
       <Link to="/downloads" className='link-res'><FaDownload /> Material para descargar</Link>  </p><p>
       <Link to='/timer' className='link-res' target='-blank'> {<FaHourglass/>}Cronómetro para Meditación </Link> 
       </p>

       <p> ideas</p>
        <p>otras ideas  </p>

      
      </section>
    );
  };
  export default Resources;