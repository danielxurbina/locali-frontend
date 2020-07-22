import React from 'react'
import "../styles.css";


const Events = (props) => {
    const {title, date, description, image_url, price, location} = props.event.attributes
    const {name} = props.event.attributes.user
    return(
        <div className='ui four wide column'>
            <div className='ui card' style={{height: 615}}>
                <div className='image'>
                    <img style={{height: 260}} src={image_url} alt={title}/>
                </div>
                <h3>{title} - Price: {price}</h3>
                <p>Created By: {name}</p>
                <p>Date: {date}</p>
                <p>Located at: {location}</p>
                <p>{description}</p>
                <button className="ui basic button" onClick={() => props.submitRSVP(props.event.id)}>Click To RSVP</button>
            </div>
        </div> 
    )
}

export default Events