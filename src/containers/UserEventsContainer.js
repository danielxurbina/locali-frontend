import React from 'react'
import UserEventDisplay from './UserEventsDisplay'
import './card-style.css';

class UserEventsContainer extends React.Component {
    

    render(){
        let joinedEvents = this.props.joinedEvents.map(event => event.attributes)
        let filteredEvents = joinedEvents.filter(event=> parseInt(event.user.id) === parseInt(this.props.currentUser.id))
        return (
            <div className="ui grid container">
                {/* <div className="row">
                    <div className="col-md-4"> */}
                        {filteredEvents.map((object, index) => <UserEventDisplay event={object.event} key={index} currentUser={this.props.currentUser}/>)}
                    {/* </div>
                </div> */}
            </div>
            );
    }
}
 
export default UserEventsContainer;

//prior to me doing grid
{/* <div className="container-fluid d-flex justify-content-center">
<div className="row">
    <div className="col-md-4">
        {filteredEvents.map((object, index) => <UserEventDisplay event={object.event} key={index} currentUser={this.props.currentUser}/>)}
    </div>
</div>
</div> */}