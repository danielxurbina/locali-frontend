import React from 'react'
import "../styles.css";
import { useHistory } from "react-router-dom";
import { Grid } from 'grommet';

const Events = (props) => {
    const {title, date, description, image_url, price, location} = props.event.attributes
    const {name, id} = props.event.attributes.user
    let history = useHistory()
    return(
        <div className='ui four wide column'>
            <div className='ui card' style={{height: 600}}>
                <div className='image'>
                    <img style={{height: 300}} src={image_url} alt={title}/>
                 </div>
                <h3>{title} - Price: {price}</h3>
                <p>Created By: {name}</p>
                <p>Date: {date}</p>
                <p>Located at: {location}</p>
                <p>{description}</p>
                <button className="ui basic button" onClick={() => props.submitRSVP(props.event.id)}>Click To RSVP</button>
                {/* <button className='ui button' onClick={() => history.push(`/profile/${id}`)}>Vist {name} </button> */}
            </div>
        </div> 
    )
}

export default Events