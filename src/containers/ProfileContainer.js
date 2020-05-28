import React from 'react'
import EventCard from './EventCard'
const header = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

class ProfileContainer extends React.Component {

    state = {
        isClicked: false,
        id: "",
        name: "",
        username: "",
        bio: "",
        image_url: ""
    }

    componentDidMount(){
        this.setState({id: this.props.currentUser.id, name: this.props.currentUser.attributes.name, username: this.props.currentUser.attributes.username,
                      bio: this.props.currentUser.attributes.bio, image_url: this.props.currentUser.attributes.image_url
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

    handleSubmit = (event) => {
        event.preventDefault()
        let editedUser = {
            name: this.state.name,
            bio: this.state.bio,
            image_url: this.state.image_url,
            username: this.state.username
        }
        fetch(`http://localhost:3000/users/${parseInt(this.state.id)}`, {
            method: 'PATCH',
            headers: header,
            body: JSON.stringify(editedUser)
        })
        .then(response => response.json())
        .then(user => this.props.updateCurrentUser(user))
    }
    

    renderUser = () => {
            const{image_url, name, username, bio} = this.props.currentUser.attributes
            return( <div className='ui segment'>
            <img style={{width: 200}} src={image_url} alt={name}></img>
            <p>{name}</p>
            <p>@{username}</p>
            <p>{bio}</p>
            {this.state.isClicked ? this.renderEditForm() : ''}
            <button onClick={this.toggleForm}>Edit Profile</button>
            </div>
            )
    } 

    renderEditForm = () => {
        return(
            <form onSubmit={(event) => this.handleSubmit(event)}>
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
            <div>
                {this.renderUser()}
                {this.props.events.map(event => <EventCard event={event} key={event.id}/>)}
            </div>
        )
    }
}


export default ProfileContainer