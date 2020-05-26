import React from 'react'
import UserEventDisplay from './UserEventsDisplay'

const UserEventsContainer = (props) => {
        return ( 
            <div>
                {props.userEvent.map(e => <UserEventDisplay event={e.event} key={e.event.id} /> )}
            </div>
         );
}
 
export default UserEventsContainer;