import React from 'react'
import ProfileContainer from '../containers/ProfileContainer'

class ProfilePage extends React.Component {
    

    render() { 
        console.log('ProfilePage', this.props.user)
        return ( 
            <div>
                <ProfileContainer user={this.props.user} />
            </div>
         );
    }
}
 
export default ProfilePage;