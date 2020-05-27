import React from 'react'
import "../styles.css";
const eventsURL = "http://localhost:3000/events"



class EventDetails extends React.Component {
    
    state = {
        event: null,
        date: '',
        description: '',
        image_url: '',
        price: 0,
        title: '',
        location: '',
        eventId: null
    }

    componentDidMount(){
        fetch(`${eventsURL}/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(event => this.setState({
            event: event.data, date: event.data.attributes.date, 
            description: event.data.attributes.description,
            image_url: event.data.attributes.image_url, 
            price: event.data.attributes.price, 
            title: event.data.attributes.price,
            location: event.data.attributes.location, 
            eventId: event.data.id
        }))
    }

    editEventHandler = () => {
        console.log('clicked')
    }

 

    renderEvent = () => {
        const { date, description, image_url, price, title, location} = this.state.event.attributes
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
                <button onClick={this.editEventHandler}>Edit Event</button>
                <button value="Delete" onClick={() => this.props.deleteEvent(this.state.eventId)}>Delete Event</button>
            </div>
            <button onClick={() => this.props.history.push('/homepage')}>Go Back To Homepage</button>
            </div>
        )
        
    }

    render() { 
        console.log('EventDetails Event State', this.state.event)
        console.log('Event ID', this.state.eventId)
        return ( 
            this.state.event ? this.renderEvent() : <div> this event doesn't exist </div>
         );
    }
}
 
export default EventDetails;