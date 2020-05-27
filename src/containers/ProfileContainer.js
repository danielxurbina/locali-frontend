import React from 'react'
import EventCard from './EventCard'

class ProfileContainer extends React.Component {

    state = {
        isClicked: false,
        name: '',
        username: '',
        bio: '',
        image_url: '',
        user: null
    }

    // this will match the users id when you click on the visit button from the homepage and render the page that belongs to that user 
    // componentDidMount(){
    //     fetch(`http://localhost:3000/users/${this.props.match.params.id}`)
    //     .then(response => response.json())
    //     .then(user => this.setState({user: user}))
    // }

    initialSetState = () => {
        this.setState({
            name: this.props.user.name,
            username: this.props.user.username,
            bio: this.props.user.bio,
            image_url: this.props.user.image_url
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
        // let editedUser = {
            
        // }
        // fetch('http://localhost:3000/users', {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }, 
        //     body: JSON.stringify({})
        // })
    }

    renderUser = () => {
        if(this.props.user){
            return( <div>
            <img style={{width: 200}} src={this.props.user.image_url} alt={this.props.name}></img>
            <p>{this.props.user.name}</p>
            <p>@{this.props.user.username}</p>
            <p>{this.props.user.bio}</p>
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