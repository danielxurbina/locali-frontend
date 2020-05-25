import React from 'react'
import UserEventsContainer from '../containers/UserEventsContainer'

class UserEvents extends React.Component {
    
    render() { 
        return ( 
            <div>
                <UserEventsContainer userEvent={this.props.attending}/>
            </div>
         );
    }
}
 
export default UserEvents;