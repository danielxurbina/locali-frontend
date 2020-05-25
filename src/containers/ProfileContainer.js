import React from 'react'
import EventCard from './EventCard'

class ProfileContainer extends React.Component {

    renderUser = () => {
        if(this.props.user){
            return <div>
            <img style={{width: 200}} src={this.props.user.image_url} alt={this.props.name}></img>
            <p>{this.props.user.name}</p>
            <p>@{this.props.user.username}</p>
            <p>{this.props.user.bio}</p>
            </div>
        }
    }

    render(){
        console.log('Profile Container props', this.props)
        return(
            <div className='ui segment'>
                {this.renderUser()}
            </div>
        )
    }
}

export default ProfileContainer