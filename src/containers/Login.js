import React from 'react'
import "./SignUp.css";

class Login extends React.Component {
    state = {
      username: "", 
      password: ""
    }

    handleLogin = (event) => {
        this.setState({username: event.target.value})
    }

    handlePassword = (event) => {
        this.setState({password: event.target.value})
    }

    submitLoginHandler = (event, username, password) => {
        event.preventDefault()
        fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(userOBJ => userOBJ.data.filter(user => {
          if(user.attributes.username === username && user.attributes.password === password){
              this.props.setCurrentUser(user)
              this.props.history.push('/homepage')
          }
          else if(user.attributes.username !== username && user.attributes.password !== password){
            alert('Incorrect Credentials, Try Again')
          }
        })
      )}

    render(){
        return( 
          <div className="SignUpLayout">
          <div className="SignUpFormWithTitle">
            <div className="UserHeaderTitle" />
            <div className="LogInImg" />
            <div className="SignUpForm">
              <h3>
                <b>Sign In</b>
              </h3>
              <form onSubmit={(event) => this.submitLoginHandler(event, this.state.username, this.state.password)}>
                <label>Username</label>
                <input className="SignUpTextBox" type="text" name="username" placeholder="Username" value={this.state.username} onChange={(event) => this.handleLogin(event)}/>
                <label>Password</label>
                <input type="password" className="SignUpTextBox" name="password" placeholder="Password" value={this.state.password} onChange={(event) => this.handlePassword(event)}/> 
                <p className ="space this shit"> </p>
                <button className="btnSignUp" type="submit" value="Submit">Sign In</button>
                <button className="btnSignUp" type="sign up" value="Sign Up" onClick={() => this.props.history.push('/signup')}>Sign Up</button>
              </form>
            </div>
          </div>
          </div>          
          
        )   
    }
}
export default Login





