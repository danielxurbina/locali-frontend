import React from 'react'
import EventContainer from '../containers/EventContainer'
import Form from './Form'
import Search from './Search'

class Dashboard extends React.Component {
    render() { 
        const {date, title, imageURL, description, location, price} = this.props
        return (  
            <div>
                <Search searchPosts={this.props.searchPosts} sortBy={this.props.sortBy}/>
                <Form 
                inputHandler={this.props.inputHandler} 
                date={date} title={title} i
                mage={imageURL}
                description={description} 
                location={location} 
                price={price} 
                submitHandler={this.props.submitHandler}
                />
                <EventContainer event={this.props.event}/>
            </div>
        );
    }
}
 
export default Dashboard;