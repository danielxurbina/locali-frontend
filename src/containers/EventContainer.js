import React from 'react'
import Events from './Events'


class EventContainer extends React.Component{

    render(){
        return(
            <div className='ui grid container'>{this.props.event.map((event)=> <Events event={event} key={event.id} submitRSVP={this.props.submitRSVP}/>)}</div>
        )
    }
}

export default EventContainer

