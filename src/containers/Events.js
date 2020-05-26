import React from 'react'
import "../styles.css";

const Events = (props) => {
    const {title, date, description, image_url, price, location} = props
    const {name} = props.user
    return(
        <div>
          <h2>{title} - Price: {price}</h2>
            <img src={image_url} alt={title} className="events-photo"/>
            <p>Created By: {name}</p>
            <p>Date: {date}</p>
            <p>Located at: {location}</p>
            <button>RSVP</button>
            <p>{description}</p>
        </div>
    )
}

export default Events

