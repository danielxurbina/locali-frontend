import React from 'react'
import { useHistory } from "react-router-dom";

function EventCard(props){
    let history = useHistory()
    const {image_url, title } = props.event.attributes
    const {id} = props.event

    return(
        <div className='ui four wide column'>
            <div className='ui card' style={{minHeight: 50}}>
                <div className ='image'>
                    <img className="events-page-image" src={image_url} alt={title}/>
                </div>
                <div className='card-body text-dark'>
                    <h4 className='card-title'>{title}</h4>
                    <button className="ui basic button" onClick={() => history.push(`/details/${id}`)}>Event Details</button>
                </div>
            </div>
        </div>
    )
}

export default EventCard
