import React from 'react'

const Events = (props) => {
    const {title, date, description, image_url, price, location} = props
    const {name} = props.user
    return(
        <div>
            <img src={image_url} alt={title}/>
            <h3>{title} - Price: {price}</h3>
            <p>Created By: {name}</p>
            <p>Date: {date}</p>
            <p>Located at: {location}</p>
            <p>{description}</p>
        </div>
    )
}

export default Events