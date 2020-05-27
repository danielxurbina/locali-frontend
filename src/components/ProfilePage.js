import React from 'react'
import ProfileContainer from '../containers/ProfileContainer'

class ProfilePage extends React.Component {
    

    render() { 
        // let array = this.props.users.map(user => user.attributes.events)
        // const eventsArray =  [].concat(...array)
       
        return ( 
            <div>
                {this.props.users.map(user => <ProfileContainer user={user} key={user.id} events={user.attributes.events} currentUser={this.props.currentUser}/>)}
            </div>
         );
        }
        
}
 
export default ProfilePage;