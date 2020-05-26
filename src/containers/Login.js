import React from 'react'

class Login extends React.Component {
    state = {username: "", password: ""}

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
          }
        })
      )}

    render(){
        return(
            <div>
                Sign In
                <form onSubmit={(event) => this.submitLoginHandler(event, this.state.username, this.state.password)}>
                    <label>
                        Username:
                        <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleLogin(event)}/>
                    </label>
                    <label>
                        Password: 
                        <input 
                        name="password" 
                        placeholder="Password" 
                        type="password" 
                        value={this.state.password} 
                        onChange={(event) => this.handlePassword(event)}
                        />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Login