import React from 'react'

class UserEventsDisplay extends React.Component{
    // const {title, date, description, image_url, price, location} = props.event

    
    render(){
        console.log("inside UserEventsDisplay", this.props.event.attributes)
        console.log("current User", this.props.currentUser)
        console.log("filtered events", this.filterEvents())
        return(
            <div>
                {/* <img style={{width: 300}}src={image_url} alt={title}/>
                <h3>{title} - Price: {price}</h3>
                <p>Date: {date}</p>
                <p>Located at: {location}</p>
                <p>{description}</p> */}
            </div>
            )    
    }
}

export default UserEventsDisplay