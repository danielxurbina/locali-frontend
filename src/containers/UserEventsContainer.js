import React from 'react'
import UserEventDisplay from './UserEventsDisplay'
import './UserEvents.css';

function UserEventsContainer(props){
    let joinedEvents = props.joinedEvents.map(event => event.attributes)
    let filteredEvents = joinedEvents.filter(event=> parseInt(event.user.id) === parseInt(props.currentUser.id))
    let upcoming = filteredEvents.filter(event => event.event.date > props.currentDate)
    let previous = filteredEvents.filter(event => event.event.date < props.currentDate)
    return (
        <>
            <div className="events-banner">
                <h1>Upcoming Events</h1>
            </div>
            <div className="ui grid container">
                {upcoming.map((object, index) => <UserEventDisplay 
                event={object.event} key={index} 
                currentUser={props.currentUser} 
                removeRSVP={props.removeRSVP} 
                joinedEvents={props.joinedEvents} 
                currentDate={props.currentDate}/>)}
            </div>
            <div className="attended-banner">
                <h1>Attended Events</h1>
            </div>
            <div className="ui grid container">
                {previous.map((object, index) => <UserEventDisplay 
                event={object.event} key={index}
                currentUser={props.currentUser} 
                removeRSVP={props.removeRSVP} 
                joinedEvents={props.joinedEvents} 
                currentDate={props.currentDate}/>)}
            </div>
        </>
    );
}
export default UserEventsContainer;

