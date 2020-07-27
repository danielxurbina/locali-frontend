import React from 'react'
import UserEventDisplay from './UserEventsDisplay'
import './card-style.css';

class UserEventsContainer extends React.Component {
    

    render(){
        let joinedEvents = this.props.joinedEvents.map(event => event.attributes)
        let filteredEvents = joinedEvents.filter(event=> parseInt(event.user.id) === parseInt(this.props.currentUser.id))
        let upcoming = filteredEvents.filter(event => event.event.date > this.props.currentDate)
        let previous = filteredEvents.filter(event => event.event.date < this.props.currentDate)
        return (
            <>
            <div className="header">
                <h1>Upcoming Events</h1>
            </div>
            <div className="ui grid container">
                {upcoming.map((object, index) => <UserEventDisplay 
                event={object.event} key={index} 
                currentUser={this.props.currentUser} 
                removeRSVP={this.props.removeRSVP} 
                joinedEvents={this.props.joinedEvents} 
                currentDate={this.props.currentDate}/>)}
            </div>
            <div className="header">
                <h1>Attended Events</h1>
            <div className="ui grid container">
                {previous.map((object, index) => <UserEventDisplay 
                event={object.event} key={index}
                currentUser={this.props.currentUser} 
                removeRSVP={this.props.removeRSVP} 
                joinedEvents={this.props.joinedEvents} 
                currentDate={this.props.currentDate}/>)}
            </div>
            </div>
            </>
            );
    }
}
 
export default UserEventsContainer;

