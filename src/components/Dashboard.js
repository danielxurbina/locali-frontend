import React from 'react';
import EventContainer from '../containers/EventContainer';
import Form from './Form';
import Search from './Search';
import './Dashboard.css';

function Dashboard(props) {
    return ( 
            <div className='dashboard-container'>
                <Search 
                searchPosts={props.searchPosts} 
                sortBy={props.sortBy}
                searchPhrase={props.searchPhrase}
                />
                <Form  
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