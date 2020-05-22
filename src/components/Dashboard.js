import React from 'react'
import EventContainer from '../containers/EventContainer'
import Form from './Form'
import Search from './Search'

class Dashboard extends React.Component {
    render() { 
        return (  
            <div>
                <EventContainer events={this.props}/>
                <Form />
                <Search />
            </div>
        );
    }
}
 
export default Dashboard;