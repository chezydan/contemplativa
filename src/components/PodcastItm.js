import React from 'react'

import {useState} from 'react'
import { FaSpotify } from "react-icons/fa"

function PodcastItm({itm}) {
  
  const [readMore, setReadMore] = useState(false);
   const {id, title,link, desc, temas} =  itm;
   function handleMoreClick(){
        setReadMore(!readMore)
   }

                    return             (
                <div className='cart--podcast' key={id}>
                   
                    <h3>{title}</h3>
                    <a href={link}  target="_blank" > link al episodio <span className='iconspotify'>
                    {<FaSpotify  size={'1.9rem'} /> }  </span></a>
                    <p>{readMore? desc : desc.slice(0,154)+'. . .' }
                    <span className='readmore'
                    onClick={handleMoreClick }>
                        {readMore? `leer menos` : `ampliar`}</span> </p>
                    <p className='temas'> {temas!=="" && <p>temas: {temas} </p> }   </p>
                </div> )
                
        

  
}


export default PodcastItm