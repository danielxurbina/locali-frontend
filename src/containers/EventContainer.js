import React from 'react'
import Events from './Events'


function EventContainer(props){
    return(
        <div className='ui grid container'>
            {props.event.map((event)=> <Events event={event} key={event.id} submitRSVP={props.submitRSVP}/>)}
        </div>
    )
}
export default EventContainer

