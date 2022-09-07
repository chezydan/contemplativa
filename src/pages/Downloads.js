import { FaDownload } from 'react-icons/fa'

const downloads =[{
    link:    "https://docs.google.com/document/d/1RXhmYBd_tnnQMpCI7cYa-MeyKfta7-gaqRuAKmhrrDM/edit?usp=sharing",
    tema: "cuento del yoga vasista",
    desc:"Se trata de un cuento extraido de un texto clásico que nos puede dar una idea \
    sobre la naturaleza sobre lo arbitrario de nuestra relacion con la realidad para contactarlo con la interpretación del sufrimiento"}
    ,
{  link: "https://docs.google.com/document/d/1T4Ni9xE3sTElMnaSltMW3xrAuHOfQ8DyEvrhhrSUuo4/edit?usp=sharing", 
tema: "Defusion Cognitiva - exploracion meditativa",
desc:""},

{  link: "https://docs.google.com/document/d/18IbVrZKkRxzX8aIccD2jVXLPsHLFnoBV1DSE5WsPkwA/edit?usp=sharing", 
tema: "Sobre el aprender, el 'adentro' y el 'afuera'",
desc:"de la sabiduria del maestro Dogen"},

{  link: "https://docs.google.com/document/d/19EMhaFgVSn5hvwR2ojiobp-XTeXoSdw5CloasF9Dz2c/edit?usp=sharing", 
tema: "Meditacion al Caminar - meditacion formal",
desc:""},

{  link: "", 
tema: "https://docs.google.com/document/d/1SRDpyHrD9O3SGXA7hzyRBimjHsNwl4gq2EDwpnc6caE/edit?usp=sharing",
desc:""},

{  link: "https://docs.google.com/document/d/1ytnPyzecER3PNTSB6-NBePtbiesGOes_x6E3vijTh88/edit?usp=sharing", 
tema: "Scaneo Corporal - meditacion formal",
desc:""},

{  link: "https://docs.google.com/document/d/1QmsRJl_tikIpDQS_cc5RoUyumzbCbpvDl27DXcIoQ9s/edit?usp=sharing", 
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