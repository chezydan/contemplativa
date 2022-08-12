import React from 'react'
import {episodes} from './../data/podcastData'
import { FaSpotify } from "react-icons/fa"


function PodcastList() {



  return (    <div>
        <h4>Podcast Publicados </h4>
        <ul>
            {episodes.map( (itm)=>{

                
                    const {id, title,link, desc, temas} =itm;
                    return                (
                <li className='container' key={id}>
                    <h3>{title}</h3>
                    <a href={link} > link al episodio <span className='iconspotify'>
                    {<FaSpotify  size={'1.9rem'} /> }  </span></a>
                    <p>{desc}</p>
                    <p> {temas!=="" && <p>temas: {temas} </p> }   </p>


                </li> )
                
            })}


        </ul>


        
        
        </div>
  )
}




export default PodcastList