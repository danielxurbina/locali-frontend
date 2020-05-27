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

    // this will match the users id when you click on the visit button from the homepage and render the page that belongs to that user 
    componentDidMount(){
        // fetch(`http://localhost:3000/users/${this.props.match.params.id}`)
        // .then(response => response.json())
        // .then(user => this.setState({user: user}))
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

    handleSubmit = (event) => { //getting 404 need update method in backend
        event.preventDefault()
        let editedUser = {
            name: this.state.name,
            bio: this.state.bio,
            image_url: this.state.image_url,
            username: this.state.username
        }
        console.log(editedUser)
        fetch(`http://localhost:3000/users/${parseInt(this.state.id)}`, {
            method: 'PATCH',
            headers: header,
            body: JSON.stringify(editedUser)
        })
        .then(response => response.json())
        .then(user => this.props.updateCurrentUser(user)
        // .then(updatedUser =>  this.setState({
        //     name: updatedUser.data.attributes.name, 
        //     username: updatedUser.data.attributes.username, 
        //     bio: updatedUser.data.attributes.bio, 
        //     image_url: updatedUser.data.attributes.image_url
        // }))
        )
    }

    renderUser = () => {
        if (this.props.user.attributes.username === this.props.currentUser.attributes.username){
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
        let userEvents = this.props.events.filter(event => parseInt(event.user_id) === parseInt(this.props.currentUser.id))
        return(
            <div>
                {this.renderUser()}
                {userEvents.map(event => <EventCard event={event} key={event.id}/>)}     
            </div>
        )
    }
}


export default ProfileContainer