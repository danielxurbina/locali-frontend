import React from 'react'
import UserEventDisplay from './UserEventsDisplay'

const UserEventsContainer = (props) => {
    console.log("inside UserEventsContainer", props.joinedEvents)
        return ( 
            <div>
              {/* {props.joinedEvents.filter((event,index) => event.user.name === props.currentUser.name ? <UserEventDisplay event={event} key={index}/> : null)} */}
              {/* {props.joinedEvents.filter(event => event.user === props.currentUser ? console.log(event) : null)} */}
            </div>
         );
}
 
export default UserEventsContainer;