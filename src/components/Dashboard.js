import React from 'react'
import EventContainer from '../containers/EventContainer'
import Form from './Form'
import Search from './Search'

class Dashboard extends React.Component {
    render() { 
        const {date, title, image, description, location, price} = this.props
        return (  
            <div>
                 {/* <Search /> */}
                <Form 
                inputHandler={this.props.inputHandler}
                date={date}
                title={title}
                image={image}
                description={description}
                location={location}
                price={price}/>
                <EventContainer event={this.props.event.data}/>
            </div>
        );
    }
}
 
export default Dashboard;