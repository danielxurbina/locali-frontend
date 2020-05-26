import React from 'react'
import EventCard from './EventCard'

class ProfileContainer extends React.Component {

    state = {
        isClicked: false,
        name: '',
        username: '',
        bio: '',
        image_url: '',
        userId: null
    }

    initialSetState = () => {
        this.setState({
            name: this.props.user.attributes.name,
            username: this.props.user.attributes.username,
            bio: this.props.user.attributes.bio,
            image_url: this.props.user.attributes.image_url,
            userId: this.props.user.id
        })
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

    handleSubmit = (event) => { //connected, need to persist to database
        event.preventDefault()
        let editedUser = {
            name: this.state.name,
            bio: this.state.bio,
            image_url: this.state.image_url    
        }
        console.log(editedUser)
        fetch(`http://localhost:3000/users/${this.state.userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify(editedUser)
        })
        .then(response => response.json())
        .then(console.log)
    }

    renderUser = () => {
        if(this.props.user){
            return( <div>
            <img style={{width: 200}} src={this.props.user.attributes.image_url} alt={this.props.name}></img>
            <p>{this.props.user.attributes.name}</p>
            <p>@{this.props.user.attributes.username}</p>
            <p>{this.props.user.attributes.bio}</p>
            </div>
            ) 
        }
    }

    renderEditForm = () => {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Edit Profile Info:
                <input type='text' name='name' placeholder='Change Name' value={this.state.name} onChange={this.handleFormChange}></input>
                <input type='text' name='username' placeholder='Change Username' value={this.state.username} onChange={this.handleFormChange}></input>
                <input type='text' name='bio' placeholder='Edit Bio' value={this.state.bio} onChange={this.handleFormChange}></input>
                <input type='text' name='image_url' placeholder='Update Profile Picture' value={this.state.image_url} onChange={this.handleFormChange}></input>
                <button>Submit Changes</button>
                </label>
            </form>
        )
    }
    

    render(){
        return(
            <div className='ui segment'>
                {this.renderUser()}
                {this.state.isClicked ? this.renderEditForm() : ''}
                <button onClick={() => {
                    this.initialSetState() 
                    this.toggleForm()}}>Edit Profile</button>
            </div>
        )
    }
}

export default ProfileContainer