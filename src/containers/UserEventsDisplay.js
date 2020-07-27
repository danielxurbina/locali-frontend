import React from 'react'
import './card-style.css';

function UserEventsDisplay(props){
    
    const findEvent = (id) => {
        let notRSVP = props.joinedEvents.filter(je => je.attributes.event.id === id)
        let eventId = notRSVP.map(rsvp => rsvp.id)
        let joinedEventId = eventId.pop()
        props.removeRSVP(joinedEventId)
    }

        const {title, date, description, image_url, price, location, id} = props.event
        return(
            <div className='ui four wide column'>
                <div className='ui card' style={{marginTop: 30}}>
                    <div className ='image'>
                        <img className="events-page-image" src={image_url} alt={title}/>
                    </div>
                    <div className='card-body text-dark'>
                        <h4 className='card-title'>{title}</h4>
                        <p className="card-text text-secondary">Price: {price}</p>
                        <p className='card-text text-secondary'>Date: {date}</p>
                        <p className='card-text text-secondary'>Located at: {location}</p>
                        <p className='card-text text-secondary'>{description}</p>
                        <button onClick={() => findEvent(id)}>{props.currentDate < date ? "Remove RSVP" : "Remove Event"}</button>
                    </div>
                </div>
            </div>
            )    
}

export default UserEventsDisplay

