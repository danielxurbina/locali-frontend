import React from 'react'

class Login extends React.Component {
    state = {username: "", password: ""}

    handleLogin = (event) => {
        this.setState({username: event.target.value})
    }

    handlePassword = (event) => {
        this.setState({password: event.target.value})
    }

    render(){
        console.log(this.state)
        return(
            <div>
                Sign In
                <form onSubmit={(event) => this.props.submitLoginHandler(event, this.state.username, this.state.password)}>
                    <label>
                        Username:
                        <input 
                        type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={(event) => this.handleLogin(event)}
                        />
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