import { FaDownload } from 'react-icons/fa'

const downloads =[{
    link:    "cuento del yoga vasista.docx",
    tema: "cuento del yoga vasista",
    desc:"Se trata de un cuento extraido de un texto clásico que nos puede dar una idea \
    sobre la naturaleza sobre lo arbitrario de nuestra relacion con la realidad para contactarlo con la interpretación del sufrimiento"}
    ,
{  link: "Defusion.docx", 
tema: "Defusion Cognitiva - exploracion meditativa",
desc:""},

{  link: "/ToDownload/Dogen aprender.docx", 
tema: "Sobre el aprender, el 'adentro' y el 'afuera'",
desc:"de la sabiduria del maestro Dogen"},

{  link: "ToDownload/Meditación caminando.docx", 
tema: "Meditacion al Caminar - meditacion formal",
desc:""},

{  link: "ToDownload/Recomendaciones.docx.docx", 
tema: "Recomendaciones basicas para la meditacion",
desc:""},

{  link: "ToDownload/Scaneo Corporal.docx", 
tema: "Scaneo Corporal - meditacion formal",
desc:""},

{  link: "ToDownload/Scaneo Corporal basico.docx", 
tema: "Scaneo Corporal basico- meditacion formal",
desc:"se trata de un mapeo corporal simplificado"},



]


const Downloads=()=>{

return (<>
    <h2> <FaDownload size ='1.2em'/>Recursos para descargar    <FaDownload size ='1.2em'/>           </h2>
    <p> Nota: Si hay dificultades en bajar el link, se puede bajar por medio de click derecho.
        sigo trabajando con esta plataforma para dar un acceso más facilitador.  :)
    </p>
{
    downloads.map((itm) =>
    {
        return(<div className="cart--podcast">
            <h4 className="podcastTitle">{itm.tema}</h4>
            <div>
        </div>

            <article className="podcastDetails">
            
          <a href={itm.link} download>  <FaDownload size ='1em'/>   {itm.tema} </a>
        <div className="temas">
            { itm.desc!=="" && itm.desc}  </div>
            </article>
            </div>
        )
    })


}

    <p> en construccion..........</p>

</>
)


}

export default Downloads