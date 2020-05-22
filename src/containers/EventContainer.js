import React from 'react'
import Events from './Events'

class EventContainer extends React.Component{

    state = {
        events: []
    }

    // getEventData = () => {
    //     Object.keys(this.props).map(event => {
    //         this.setState({events: event})
    //     })
    // }

    render(){
        console.log(this.props)
     
        return(
        <div>
          {/* {this.props.map(event =>  <Events {...event} key={event.id}/>)}  */}
        </div>
    )
    }
}

export default EventContainer