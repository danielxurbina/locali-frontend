import React from 'react'
import EventContainer from '../containers/EventContainer'
import Form from 'Form'
import Search from 'Search'

class Dashboard extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>Dashboard
                <EventContainer />
                <Form />
                <Search />
            </div>
        );
    }
}
 
export default Dashboard;