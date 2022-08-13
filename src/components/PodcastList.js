import React, {useState} from 'react'

import {episodes} from './../data/podcastData'
import PodcastItm from './PodcastItm'
import SearchPodcast from './SearchPodcast'

function PodcastList() {
    const [targetText,setTargetText] = useState("")
    


return (    <div>
        <SearchPodcast propTargetText={targetText} 
        handleSearch={setTargetText}/>
        <div className='allPodcasts'>

            {episodes.map( (itm)=>{
                const {desc, temas} = itm;
                const text = desc + temas
                return(
                    <div>
                        {text.toLowerCase().includes(targetText.toLowerCase())&& <PodcastItm itm={itm} /> }
                    </div> )    }  

    

            )
            }  </div>
        </div>  )   }

export default PodcastList