import React from 'react'
import EventContainer from '../containers/EventContainer'
import Form from './Form'
import Search from './Search'

class Dashboard extends React.Component {
    render() { 
        const {date, title, imageURL, description, location, price} = this.props
        return (  
            <div style={{marginTop: 30}}>
                <Search searchPosts={this.props.searchPosts} sortBy={this.props.sortBy}/>
                <Form 
                inputHandler={this.props.inputHandler} 
                date={date} title={title} 
                image={imageURL}
                description={description} 
                location={location} 
                price={price} 
                submitFormHandler={this.props.submitFormHandler}
                />
                <EventContainer event={this.props.event} currentUser={this.props.currentUser} submitRSVP={this.props.submitRSVP}/>
            </div>
        );
    }
}

export default Dashboard;