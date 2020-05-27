import React from 'react'
import UserEventDisplay from './UserEventsDisplay'

class UserEventsContainer extends React.Component {
    

    render(){
        // let usersEvents = this.props.joinedEvents.filter(event => event.attributes.user.id === this.props.currentUser.id)
        // console.log("inside UserEventsContainer", usersEvents)
        console.log("joined events type:", typeof(this.props.joinedEvents))
        let joinedEvents = this.props.joinedEvents.map(event => event.attributes)
        console.log(joinedEvents)
        return ( 
            <div>
                {this.props.joinedEvents.map((event, index) => <UserEventDisplay event={event} key={index} currentUser={this.props.currentUser}/>)}
            </div>
            );
    }
}
 
export default UserEventsContainer;