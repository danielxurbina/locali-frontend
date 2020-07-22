import React from 'react'
import "./SignUp.css";

//no functionality yet
class SignUp extends React.Component {
    render(){
        return(
            <div className="SignUpLayout">
            <div className="SignUpFormWithTitle">
              <div className="UserHeaderTitle" />
              <div className="SignUpImg" />
              <div className="SignUpForm">
                <h3>
                  <b>Sign Up</b>
                </h3>
                <form>
                  <label>Name</label>
                  <input type="text" className="SignUpTextBox" name="name" value={null} placeholder="Name"/>
                  <label>ImageURL</label>
                  <input type="text" className="SignUpTextBox" name="image" value={null} placeholder="Profile Image"/>
                  <label>Username</label>
                  <input className="SignUpTextBox" type="text" name="username" value={null} placeholder="Username"/>
                  <label>Password</label>
                  <input type="password" className="SignUpTextBox" name="password" value={null} placeholder="Password"/> 
                  <p className ="space this shit"> </p>
                  <button className="btnSignUp" type="submit" value="Submit">Sign In</button>
                </form>
              </div>
            </div>
          </div>
        )
    }
}

export default SignUp

            // <div>
            //     Sign Up
            //     <form >
            //         <label>
            //             Name:
            //             <input type="text" name="name" value={""}  />
            //         </label>
            //         <label>
            //             ImageURL:
            //             <input type="text" name="image" value={""}  />
            //         </label>
            //         <label>
            //             Username:
            //             <input type="text" name="username" value={""}  />
            //         </label>
            //         <label>
            //             Password: 
            //             <input 
            //             name="password" 
            //             placeholder="Password" 
            //             type="password" 
            //             value={""} 
            //             />
            //         </label>
            //             <input type="submit" value="Submit" />
            //     </form>
            // </div>

