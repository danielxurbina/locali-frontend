import React from 'react'
import { useHistory } from "react-router-dom";

const EventCard = (props) => {
    let history = useHistory()
    const {image_url, title } = props.event.attributes
    const {id} = props.event

    return(
        <div className='card text-center shadow' style={{margin: 15}}>
            <div className ='overflow'>
                <img className="events-page-image" src={image_url} alt={title}/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{title}</h4>
                <button className="btn btn-outline-success" onClick={() => history.push(`/details/${id}`)}>Event Details</button>
            </div>
        </div>
    )
}

export default EventCard


        // Original Code
        // <div className='ui card'>
        //     <img src={image_url} alt={title}></img>
        //     <p>{title}</p>
        //     <button onClick={() => history.push(`/details/${id}`)}>Click For Event Details</button>
        // </div>

        //second format
        // <a className="Card">
        // <img src={image_url} />
        // <h3>{title}</h3>
        // <button onClick={() => history.push(`/details/${id}`)}>Click For Event Details</button>
        // </a>