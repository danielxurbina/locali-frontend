import React from 'react'

const EventCard = (props) => {
    console.log('EventCard', props.event)
    
    return(
        <div className='ui card'>
            <img src={props.event.image_url} alt={props.event.title}></img>
            <p>{props.event.title},  Price: {props.event.price}</p>
            <p>Date: {props.event.date}</p>
            <p>{props.event.description}</p>
            <button>Edit Event</button>
            <button>Delete Event</button>
        </div>
    )
}

export default EventCard