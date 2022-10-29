import React from 'react'

import {useState} from 'react'
import { FaSpotify } from "react-icons/fa"

function PodcastItm({itm}) {
  
  const [readMore, setReadMore] = useState(false);
   const {id, title,link, desc, temas, img} =  itm;
   function handleMoreClick(){
        setReadMore(!readMore)
   }

                    return             (
                <div className='cart--podcast' key={id}>
                   
                    <h3 className='podcastTitle'>{title}</h3>
                    <div className='cartDetails'>
                    <img src={img} alt="img" />
                    <a href={link}  target="_blank" > link al episodio <span className='iconspotify'>
                    {<FaSpotify  size={'1.9rem'} /> }  </span></a>
                    <p>{readMore? desc : desc.slice(0,154)+'. . .' }
                    <span className='readmore'
                    onClick={handleMoreClick }>
                        {readMore? `leer menos` : `ampliar`}</span>
                         </p>
                    <p className='temas'> {temas!=="" && <p>temas: {temas} </p> }   </p>
                   
                   
                    </div>
                </div> )
                
        

  
}


export default PodcastItm