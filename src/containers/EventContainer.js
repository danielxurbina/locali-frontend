import React from 'react'
import Events from './Events'

class EventContainer extends React.Component{
    // getEventData = () => {
    //     if(this.props.event){
    //         return this.props.event.map(event =>  <Events attributes={event} key={event.id}/>)
    //     }
    // }
    render(){
        return(
            <div>
                {this.props.event.map((event , index)=> <Events {...event} key={index}/>)}
            </div>
        )
    }
}

export default EventContainer