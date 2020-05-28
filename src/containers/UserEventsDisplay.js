import React from 'react'

class UserEventsDisplay extends React.Component{
    
    
    render(){
        const {title, date, description, image_url, price, location} = this.props.event
        return(
            <div>
                <img style={{width: 300}}src={image_url} alt={title}/>
                <h3>{title} - Price: {price}</h3>
                <p>Date: {date}</p>
                <p>Located at: {location}</p>
                <p>{description}</p>
                
            </div>
            )    
    }
}

export default UserEventsDisplay

