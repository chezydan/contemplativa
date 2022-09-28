import React from 'react'
import { FaEnvelope } from 'react-icons/fa'


function Contact() {
  return (
    <div className='section'>
<h3>Para toda consulta, o sugerencia se puede contactar a contemplativa por la siguiente dirección de correo electrónico </h3>

 {<FaEnvelope />}   
<a href="mailto:accioncontemplativa@gmail.com?subject=Tema: ">Contactar</a>
    </div>
  )
}

export default Contact;

