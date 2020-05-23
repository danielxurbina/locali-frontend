import React from 'react';
import './App.css';
import { Route, Switch  } from 'react-router-dom';
import { HomePage, Dashboard, NavBar, EventDetails, UserEvents } from './components/';
import { Login, SignUp, ProfileContainer} from './containers/'
const eventsURL = "http://localhost:3000/events"
const header = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

class App extends React.Component{
    state = { events: [], date: "", title: "", imageURL: "", description: "", location: "", price: "" }

    componentDidMount(){
        fetch(eventsURL)
        .then(response => response.json())
        .then(eventData => this.setState({events: eventData}))
    }

    inputHandler = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }
    
    
  render(){
    const {date, title, imageURL, description, location, price} = this.state
    let Events = this.state.events
    return (
      <div className="App">
        <NavBar/>
        <Switch >
          <Route path='/profile/:id' component={ProfileContainer} /> // route to the profile page
          <Route path='/details/:id' component={EventDetails} /> // route to the details of a specific event
          <Route path='/homepage' render={(props) => <Dashboard {...props} event={Events} inputHandler={this.inputHandler} date={date} title={title} image={imageURL} description={description} location={location} price={price}/>}/> // route to the dashboard that renders all of the events
          <Route path='/events' component={UserEvents} events={this.state.events}/> // route to the events that the user has joined
          <Route path='/signup' component={SignUp} /> // route to the sign up page
          <Route path="/login" component={Login}/> // route to the log in page
          <Route exact path="/" component={HomePage} /> // route to the page that renders the log in and sign up aka "homepage"
        </Switch>
      </div>
    );
  }
}

export default App;