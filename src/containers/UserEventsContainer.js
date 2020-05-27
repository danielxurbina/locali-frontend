import React from 'react'
import UserEventDisplay from './UserEventsDisplay'

class UserEventsContainer extends React.Component {
    

    render(){
        let joinedEvents = this.props.joinedEvents.map(event => event.attributes)
        let filteredEvents = joinedEvents.filter(event=> parseInt(event.user.id) === parseInt(this.props.currentUser.id))
        return ( 
            <div>
                {filteredEvents.map((object, index) => <UserEventDisplay event={object.event} key={index} currentUser={this.props.currentUser}/>)}
            </div>
            );
    }
}
 
export default UserEventsContainer;