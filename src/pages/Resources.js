import {Link} from 'react-router-dom'
import {FaBook , FaHourglass, FaDownload} from 'react-icons/fa'
const Resources = () => {
    return (
      <section className='section'>
        <h3 className='title'> Recursos</h3>
        <p>
        <Link  to="/books" >  <FaBook /> Libros</Link>  </p><p>
       <Link to="/downloads" ><FaDownload /> Material para descargar</Link>  </p><p>
       <Link to='/timer' > {<FaHourglass/>}Cronómetro para Meditación </Link> </p>
       
       <p> ideas</p>
        <p>otras ideas  </p>

      
      </section>
    );
  };
  export default Resources;