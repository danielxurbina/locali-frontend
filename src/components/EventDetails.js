import React from 'react'
import "../styles.css";
const eventsURL = "http://localhost:3000/events"


class EventDetails extends React.Component {
    
    state = {event: null}

    componentDidMount(){
        fetch(`${eventsURL}/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(event => this.setState({event: event.data}))
    }

    renderEvent = () => {
        const {date, description, image_url, price, title, location} = this.state.event.attributes
        const {name} = this.state.event.attributes.user
        return (
            <div className="event-details-page">
                <img className="events-photo" src={image_url} alt={title}/>
                <div className="page-info">
                <h2>{title}</h2>
                <div>Created By: {name}</div>
                <div>Price: {price}</div>
                <div>Date: {date}</div>
                <div>Located at: {location}</div>
                <div>{description}</div>
                <button>Edit Event</button>
                <button>Delete Event</button>
            </div>
            <button onClick={() => this.props.history.push('/homepage')}>Go Back To Homepage</button>
            </div>
        )
        
    }

    render() { 
        console.log(this.state.event)
        return ( 
            this.state.event ? this.renderEvent() : <div> this event doesn't exist </div>
         );
    }
}
 
export default EventDetails;