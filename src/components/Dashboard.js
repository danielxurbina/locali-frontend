import React from 'react'
import EventContainer from '../containers/EventContainer'
import Form from './Form'
import Search from './Search'

function Dashboard(props) {
    
    const {date, title, imageURL, description, location, price} = props
    return ( 
            <div style={{marginTop: 30}}>
                <Search searchPosts={props.searchPosts} sortBy={props.sortBy}/>
                <Form 
                inputHandler={props.inputHandler} 
                date={date} title={title} 
                image={imageURL}
                description={description} 
                location={location} 
                price={price} 
                submitFormHandler={props.submitFormHandler}
                />
                <EventContainer 
                event={props.event} 
                currentUser={props.currentUser} 
                submitRSVP={props.submitRSVP}
                />
            </div>
    );
}


export default Dashboard;