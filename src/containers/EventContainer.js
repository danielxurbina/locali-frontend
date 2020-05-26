import React from 'react'
import Events from './Events'

class EventContainer extends React.Component{
    render(){
        return(
            <div>{this.props.event.map((event, index)=> <Events {...event} key={index}/>)}</div>
        )
    }
}

export default EventContainer

