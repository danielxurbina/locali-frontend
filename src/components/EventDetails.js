import React from 'react'
import "./event-details.css";
const eventsURL = "http://localhost:3000/events";


class EventDetails extends React.Component {
    
    state = {
        isClicked: false,
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
            title: event.data.attributes.title,
            location: event.data.attributes.location, 
            eventId: event.data.id
        }))
    }

    toggleForm = () => {
        this.setState({isClicked: !this.state.isClicked})
    }

    handleFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderEditForm = () => {
        const {date, title, location, description, image_url, price, eventId} = this.state
    
        return(
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <form className='ui form' onSubmit={(event) => this.props.updateEvent(event, date, title, location, description, image_url, price, eventId )}>
                    <div className='field' style={{width: 300}}>
                        <label>Date</label>
                        <input type="date" name="date" value={date} onChange={(event) => this.handleFormChange(event)}/>
                    </div>
                    <div className='field' style={{width: 300}}>
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Title" value={title} onChange={(event) => this.handleFormChange(event)}/>
                    </div>
                    <div className='field'style={{width: 300}}>
                        <label>Location</label>
                        <input type="text" name="location" placeholder="Location" value={location} onChange={(event) => this.handleFormChange(event)}/>
                    </div>
                    <div className='field' style={{width: 300}}>
                        <label>Description</label>
                        <input type="text" name="description" placeholder="Description" value={description} onChange={(event) => this.handleFormChange(event)}/>
                    </div>
                    <div className='field' style={{width: 300}}>
                        <label>Image</label>
                        <input type="text" name="imageURL" placeholder="ImageURL" value={image_url} onChange={(event) => this.handleFormChange(event)}/>
                    </div>
                    <div className='field' style={{width: 300}}>
                        <label>Price</label>
                        <input type="number" name="price" placeholder="Price" value={price} onChange={(event) => this.handleFormChange(event)}/>
                    </div>
                    <button className='ui button'>Submit Changes</button>
                </form>
            </div>
        )
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
                {this.state.isClicked ? this.renderEditForm() : ''}
                <br></br>
                <button className='ui button' onClick={this.toggleForm}>Edit Event</button>
                <button className='ui button' value="Delete" onClick={() => this.props.deleteEvent(this.state.eventId)}>Delete Event</button>
                <br></br>
                </div>
                <br></br>
                <button className='ui button' onClick={() => this.props.history.push('/homepage')}>Go Back To Homepage</button>
            </div>
        )       
    }

    render() { 
        // console.log('EventDetails Event State', this.state.event)
        // console.log('Event ID', this.state.eventId)
        return ( 
            this.state.event ? this.renderEvent() : <div> this event doesn't exist </div>
         );
    }
}
 
export default EventDetails;




