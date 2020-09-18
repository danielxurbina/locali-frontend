import React from 'react';
import './SignUp.css';

class SignUp extends React.Component {

  state = {
    name: '',
    image: '',
    username: '',
    password: ''
  }

  handleAccountCreation = (event) => {
    this.setState({[event.target.name]: event.target.value})
  } 

  //getting a 400 error that param is missing 
  //work to fix in backend
  submitCreateAccount = (event) => {
    event.preventDefault()
    let newUser = {
      name: this.state.name,
      image_url: this.state.image,
      bio: '',
      username: this.state.username,
      password: this.state.password
    }
    console.log(newUser)
    // fetch('http://localhost:3000/users', {
    //   method: 'POST',
    //   header: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newUser)
    // })
    // .then(response => response.json())
    // .then(user => console.log(user))
  }

    render(){
        return(
            <div className='SignUpLayout'>
              <div className='SignUpForm'>
                <div className='form-container'>
                <h3>
                  <b>Sign Up</b>
                </h3>
                <form onSubmit={(event) => this.submitCreateAccount(event)}>
                  <label>Name</label>
                  <input type='text' className='SignUpTextBox' name='name' autoFocus 
                  value={this.state.name} 
                  placeholder='Name' 
                  onChange={(event) => this.handleAccountCreation(event)}
                  />
                  <label>ImageURL</label>
                  <input type='text' className='SignUpTextBox' name='image' 
                  value={this.state.image} 
                  placeholder='Profile Image'
                  onChange={(event) => this.handleAccountCreation(event)}
                  />
                  <label>Username</label>
                  <input className='SignUpTextBox' type='text' name='username' 
                  value={this.state.username} 
                  placeholder='Username'
                  onChange={(event) => this.handleAccountCreation(event)}
                  />
                  <label>Password</label>
                  <input type='password' className='SignUpTextBox' name='password' 
                  value={this.state.password} 
                  placeholder='Password' 
                  onChange={(event) => this.handleAccountCreation(event)}/> 
                  <br></br>
                  <br></br>
                  <button className='btnSignUp' type='submit' value='Submit'>Sign In</button>
                </form>
              </div>
              </div>
              <div className='SignUpImg' />
            </div>
        )
    }
}

export default SignUp;



