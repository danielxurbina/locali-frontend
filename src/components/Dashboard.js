import React from 'react'
import EventContainer from '../containers/EventContainer'
import Form from './Form'
import Search from './Search'
const eventsURL = "http://localhost:3000/events"
const header = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

class Dashboard extends React.Component {

    // state = {events: [], date: "", title: "", imageURL: "", description: "", location: "", price: 0}

    // receiveDataOBJ = () => {
    //     if(this.props.event.data){
    //         this.setState({events: this.props.event.data})
    //     }
    // }

    // inputHandler = (event) => {
    //     this.setState({[event.target.name]: event.target.value})
    // }
  
    //   submitHandler = (event) => {
    //     event.preventDefault()
    //     let newPostOBJ = {
    //     date: this.state.date, 
    //     description: this.state.description, 
    //     image_url: this.state.imageURL, 
    //     location: this.state.location, 
    //     price: this.state.price, 
    //     title: this.state.title}
  
    //     fetch(eventsURL, {
    //       method: "POST",
    //       headers: header,
    //       body: JSON.stringify(newPostOBJ)
    //     })
    //     .then(response => response.json())
    //     .then(newPost => this.setState({
    //       date: "", 
    //       description: "", 
    //       imageURL: "", 
    //       location: "", 
    //       title: "", 
    //       price: 0, 
    //       events: [...this.state.events, newPost]}))
    //   }
      
    render() { 
        const {date, title, imageURL, description, location, price} = this.props
        return (  
            <div>
                 {/* <Search /> */}
                <Form 
                inputHandler={this.props.inputHandler}
                date={date}
                title={title}
                image={imageURL}
                description={description}
                location={location}
                price={price}
                submitHandler={this.props.submitHandler}/>
                <EventContainer event={this.props.event}/>
            </div>
        );
    }
}
 
export default Dashboard;