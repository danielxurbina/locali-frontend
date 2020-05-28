import React from 'react'
import ProfileContainer from '../containers/ProfileContainer'

class ProfilePage extends React.Component {
    render() { 
        let filteredEvents = this.props.events.filter(event => parseInt(event.attributes.user.id) === parseInt(this.props.currentUser.id))
        // console.log('Filtered', filteredEvents)
        return ( 
            <div>
                <ProfileContainer events={filteredEvents} currentUser={this.props.currentUser} updateCurrentUser={this.props.updateCurrentUser}/>
            </div>
         );
    }
}
 
export default ProfilePage;