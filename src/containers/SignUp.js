import React from 'react';
import './SignUp.css';

//no functionality yet
class SignUp extends React.Component {
    render(){
        return(
            <div className='SignUpLayout'>
              <div className='SignUpForm'>
                <div className='form-container'>
                <h3>
                  <b>Sign Up</b>
                </h3>
                <form>
                  <label>Name</label>
                  <input type='text' className='SignUpTextBox' name='name' value={null} placeholder='Name'/>
                  <label>ImageURL</label>
                  <input type='text' className='SignUpTextBox' name='image' value={null} placeholder='Profile Image'/>
                  <label>Username</label>
                  <input className='SignUpTextBox' type='text' name='username' value={null} placeholder='Username'/>
                  <label>Password</label>
                  <input type='password' className='SignUpTextBox' name='password' value={null} placeholder='Password'/> 
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



