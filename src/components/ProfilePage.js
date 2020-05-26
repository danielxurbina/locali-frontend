import React from 'react'
import ProfileContainer from '../containers/ProfileContainer'

class ProfilePage extends React.Component {

    render() { 
        return ( 
            <div>
                <ProfileContainer user={this.props.user} />
            </div>
         );
    }
}
 
export default ProfilePage;