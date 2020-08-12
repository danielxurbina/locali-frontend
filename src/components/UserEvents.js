import React from 'react';
import UserEventsContainer from '../containers/UserEventsContainer';

function UserEvents(props) {
    return ( 
        <div>
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