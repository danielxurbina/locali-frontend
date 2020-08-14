import React from 'react';
import UserEventsContainer from '../containers/UserEventsContainer';
import '../containers/UserEvents.css';

function UserEvents(props) {
    return ( 
        <div className='user-events'>
            <UserEventsContainer 
            joinedEvents={props.joinedEvents} 
            currentUser={props.currentUser} 
            removeRSVP={props.removeRSVP} 
            currentDate={props.currentDate}
            />
        </div>
    );    
}

export default UserEvents;