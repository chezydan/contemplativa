import {Link} from 'react-router-dom'
import {FaBook , FaHourglass, FaDownload, FaPen} from 'react-icons/fa'
const Resources = () => {
    return (
      <section className='section gradient1 gr1-color'>
        <h3 className='title'> Recursos</h3>
        <p className='gr1-color'>
        <Link  to="/books" className='link-res gr1-color'>  <FaBook /> Libros</Link>  </p><p>
       <Link to="/downloads" className='link-res gr1-color'><FaDownload /> Material para descargar</Link>  </p><p>
       <Link to='/timer' className='link-res gr1-color' target='-blank'> {<FaHourglass/>}Cronómetro para Meditación </Link> </p><p>
       <Link to='/quotes' className='link-res gr1-color' target='-blank'> {<FaPen/>}Frases y Citas </Link> 
       </p>

 

      
      </section>
    );
  };
  export default Resources;