import React from 'react'
import "../styles.css";
import { useHistory } from "react-router-dom";

const Events = (props) => {
    const {title, date, description, image_url, price, location} = props.event.attributes
    const {name, id} = props.event.attributes.user
    let history = useHistory()
    return(
        <div>
            <img style={{width: 300, height: 200}}src={image_url} alt={title}/>
            <h3>{title} - Price: {price}</h3>
            <p>Created By: {name}</p>
            <p>Date: {date}</p>
            <p>Located at: {location}</p>
            <p>{description}</p>
            <button onClick={() => props.submitRSVP(props.event.id)}>RSVP</button>
            {/* it goes to the profile page but renders the wrong user */}
            <button onClick={() => history.push(`/profile/${id}`)}>Vist {name} </button>
        </div>
    )
}

export default Events

