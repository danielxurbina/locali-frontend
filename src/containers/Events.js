import React from 'react'

const Events = (props) => {
    console.log(props.attributes)
    const {title, date, description, image_url, price, location} = props.attributes
    const {name} = props.attributes.user
    return(
        <div>
            <img src={image_url}/>
            <h3>{title} - Price: {price}</h3>
            <p>Created By: {name}</p>
            <p>Date: {date}</p>
            <p>Located at: {location}</p>
            <p>{description}</p>
        </div>
    )
}

export default Events