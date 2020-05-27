import React from 'react'
import EventCard from './EventCard'

class ProfileContainer extends React.Component {

    state = {
        isClicked: false,
        name: [],
        username: [],
        bio: '',
        image_url: '',
        userId: null,
        events:[],
        users: []
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

    handleSubmit = (event) => { //getting 404 need update method in backend
        event.preventDefault()
        let editedUser = {
            name: this.state.name,
            bio: this.state.bio,
            image_url: this.state.image_url    
        }
        console.log(editedUser)
        fetch(`http://localhost:3000/users/${parseInt(this.state.userId)}`, {
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
        if (this.props.user.attributes.username === 'dortha'){
            const{image_url, name, username, bio} = this.props.user.attributes
            return( <div className='ui segment'>
            <img style={{width: 200}} src={image_url} alt={this.props.user.attributes.name}></img>
            <p>{name}</p>
            <p>@{username}</p>
            <p>{bio}</p>
            {this.state.isClicked ? this.renderEditForm() : ''}
            <button onClick={this.toggleForm}>Edit Profile</button>
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
        let userEvents = this.props.events.filter(event => event.user_id === 2)
        return(
            <div>
                {this.renderUser()}
                {userEvents.map(event => <EventCard event={event} key={event.id}/>)}     
            </div>
        )
    }
}

export default ProfileContainer