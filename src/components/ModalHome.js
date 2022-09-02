


import React from 'react'

function ModalHome({show, onClose}) {
  if (!show) return null;

  return (
    <div onClick={onClose} className='overlay'>
    <div     
      className='modalContainer
      section-home cartDetails  podcastTitle' >

    <div className='modal-content'>
       <div>ModalHome__________________</div>
  <h3> Sobre el lanzamiento...</h3>
    <p> La web de contemplativa esta en etapa de lanzamiento. He publicado los contenidos de los podcast y material de apoyo, fuentes, y documentos para descargar. Aprecio la paciencia por los posibles deslices tanto técnicos como de escritura. Esto es también mejoramiento contínuo.
Ezequiel</p>
</div>

<div className='btnContainer'>
            <button className='btnPrimary'
            onClick={onClose}>
              X
            </button>
            
        </div>




</div> {/* modal container */}
    </div>
  )

}

export default ModalHome