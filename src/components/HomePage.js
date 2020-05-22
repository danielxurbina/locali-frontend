import React from 'react'
import Login from '../containers/Login'
import SignUp from '../containers/SignUp'

class HomePage extends React.Component {

    render() { 
        return ( 
            <div>Homepage
                <Login />
                <SignUp />
            </div>
         );
    }
}
 
export default HomePage;