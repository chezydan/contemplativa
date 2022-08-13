import React from 'react'
import {episodes} from './../data/podcastData'

import PodcastItm from './PodcastItm'


function PodcastList() {

  return (    <div>
        <h4>Podcast Publicados </h4>

            {episodes.map( (itm)=>{
                return(
                    <PodcastItm itm={itm} />)
            
            }
            )
            }
        </div>

  )
}




export default PodcastList