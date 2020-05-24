import React from 'react'

class Login extends React.Component {
    render(){
        return(
            <div>
                Sign In
                <form >
                <label>
                    Username:
                    <input type="text" name="username" value={""} onChange={(event) => this.props.loginHandler(event)} />
                </label>
                <label>
                    Password: 
                    <input name="password" placeholder="Password" type="password" value={""} onChange={(event) => this.props.loginHandler(event)}/>
                </label>
                    <input type="submit" value="Submit" />
            </form>
            </div>
            // <div>
            //     Sign in
            // </div>
        )
    }
}

export default Login