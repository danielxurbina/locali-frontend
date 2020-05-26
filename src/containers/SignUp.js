import React from 'react'

class SignUp extends React.Component {
    render(){
        return(
            <div>
                Sign Up
                <form >
                    <label>
                        Name:
                        <input type="text" name="name" value={""}  />
                    </label>
                    <label>
                        ImageURL:
                        <input type="text" name="image" value={""}  />
                    </label>
                    <label>
                        Username:
                        <input type="text" name="username" value={""}  />
                    </label>
                    <label>
                        Password: 
                        <input 
                        name="password" 
                        placeholder="Password" 
                        type="password" 
                        value={""} 
                        />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignUp