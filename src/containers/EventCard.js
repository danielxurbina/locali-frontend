import React from 'react'
import { useHistory } from "react-router-dom";
import "./Card.scss";

const EventCard = (props) => {
    let history = useHistory()
    const {image_url, title } = props.event.attributes
    const {id} = props.event

    return(
        <a className="Card">
        <img src={image_url} />
        <h3>{title}</h3>
        <button onClick={() => history.push(`/details/${id}`)}>Click For Event Details</button>
        </a>
    )
}

export default EventCard


        // Original Code
        // <div className='ui card'>
        //     <img src={image_url} alt={title}></img>
        //     <p>{title}</p>
        //     <button onClick={() => history.push(`/details/${id}`)}>Click For Event Details</button>
        // </div>