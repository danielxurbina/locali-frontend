import React from 'react'
import Events from './Events'

class EventContainer extends React.Component{
    render(){
        console.log('Event Container Props', this.props.event.user)
        return(
            <div>
                {this.props.event.map((event , index)=> <Events {...event} key={index}/>)}
                
            </div>
        )
    }
}

export default EventContainer