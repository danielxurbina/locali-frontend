import React from 'react'
import EventCard from './EventCard'

class ProfileContainer extends React.Component {

    state = {
        isClicked: false,
        name: '',
        username: '',
        bio: '',
        image_url: ''
    }

    toggleForm = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    handleFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

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

    renderEditForm = () => {
        return(
            <form>
                <label>Edit Profile Info:
                <input type='text' name='name' placeholder='Change Name' value={this.state.name} onChange={this.handleFormChange}></input>
                <input type='text' name='username' placeholder='Change Username' value={this.state.username} onChange={this.handleFormChange}></input>
                <input type='text' name='bio' placeholder='Edit Bio' value={this.state.bio} onChange={this.handleFormChange}></input>
                <input type='text' name='image_url' placeholder='Update Profile Picture' value={this.state.image_url} onChange={this.handleFormChange}></input>
                {/* <button onSubmit={this.handleSubmit}>Submit Changes</button> */}
                </label>
            </form>
        )
    }
    

    render(){
        console.log('ProfileContainer State', this.state)
        return(
            <div className='ui segment'>
                {this.renderUser()}
                {this.state.isClicked ? this.renderEditForm() : ''}
                <button onClick={this.toggleForm}>Edit Profile</button>
            </div>
        )
    }
}

export default ProfileContainer