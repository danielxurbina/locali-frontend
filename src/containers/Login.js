import React from 'react'

class Login extends React.Component {
    state = { username: "", password: ""}

    handleLogin = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        return(
            <div>
                Sign In
                <form onSubmit={() => this.props.loginSubmitHandler(this.state.username)}>
                <label>
                    Username:
                    <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleLogin(event)} />
                </label>
                <label>
                    Password: 
                    <input name="password" placeholder="Password" type="password" value={this.state.password} onChange={(event) => this.handleLogin(event)}/>
                </label>
                    <input type="submit" value="Submit" />
            </form>
            </div>
       
        )
    }
}

export default Login