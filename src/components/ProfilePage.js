import React from 'react';
import ProfileContainer from '../containers/ProfileContainer';

function ProfilePage(props){
    let filteredEvents = props.events.filter(event => parseInt(event.attributes.user.id) === parseInt(props.currentUser.id))
    return ( 
        <div>
            <ProfileContainer 
            events={filteredEvents} 
            currentUser={props.currentUser} 
            updateCurrentUser={props.updateCurrentUser}
            />
        </div>
    );
}

export default ProfilePage;