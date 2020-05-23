import React from 'react'
import Events from './Events'

class EventContainer extends React.Component{
    getEventData = () => {
        if(this.props.event){
            return this.props.event.map(event =>  <Events attributes={event.attributes} key={event.id}/>)
        }
    }
    render(){
        return(
            <div>
                {this.getEventData()}
            </div>
        )
    }
}

export default EventContainer