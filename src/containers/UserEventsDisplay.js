import React from 'react'
import './card-style.css';

class UserEventsDisplay extends React.Component{
    render(){
        const {title, date, description, image_url, price, location} = this.props.event
        return(
            <div className='ui four wide column'>
                <div className='ui card' style={{marginTop: 30}}>
                    <div className ='image'>
                        <img className="events-page-image" src={image_url} alt={title}/>
                    </div>
                    <div className='card-body text-dark'>
                        <h4 className='card-title'>{title}</h4>
                        <p className="card-text text-secondary">Price: {price}</p>
                        <p className='card-text text-secondary'>Date: {date}</p>
                        <p className='card-text text-secondary'>Located at: {location}</p>
                        <p className='card-text text-secondary'>{description}</p>
                        <button>Remove RSVP</button>
                    </div>
                </div>
            </div>
            )    
    }
}

export default UserEventsDisplay

