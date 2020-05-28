import React from 'react'
import './card-style.css';

class UserEventsDisplay extends React.Component{
    render(){
        const {title, date, description, image_url, price, location} = this.props.event
        return(
            <div className='card text-center shadow'>
                <div className ='overflow'>
                    <img className="events-page-image" src={image_url} alt={title}/>
                </div>
                <div className='card-body text-dark'>
                    <h4 className='card-title'>{title}</h4>
                    <p className="card-text text-secondary">Price: {price}</p>
                    <p className='card-text text-secondary'>Date: {date}</p>
                    <p className='card-text text-secondary'>Located at: {location}</p>
                    <p className='card-text text-secondary'>{description}</p>
                </div>
            </div>
            )    
    }
}

export default UserEventsDisplay
            
            // original format
            // <div>
            //     <img src={image_url} alt={title}/>
            //     <h4 className='card-title'>{title} - Price: {price}</h4>
            //     <p>Date: {date}</p>
            //     <p>Located at: {location}</p>
            //     <p>{description}</p>
                
            // </div>

