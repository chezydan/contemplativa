import {Link} from 'react-router-dom'
const Resources = () => {
    return (
      <section className='section'>
        <h2> Recursos</h2>
        <ul>
        <li>Libros</li>
        <li   ><Link to="/downloads" >Material para descargar</Link> </li>
        <li>podcasts</li>
        <li>ideas</li>
        <li>otras     ideas en construccion</li>

        </ul>
      
      </section>
    );
  };
  export default Resources;