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
    state = { 
      currentUser: null, 
      events: [], 
      date: "", 
      title: "", 
      imageURL: "", 
      description: "", 
      location: "", 
      price: 0, 
      users: []
    }

    componentDidMount(){
        fetch(eventsURL)
        .then(response => response.json())
        .then(eventData => this.setState({events: eventData.data.map(event => event.attributes)}))
        this.receiveUserData()
    }

    receiveUserData(){
      fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(users => this.setState({users: users.data.map(user => user.attributes)}))
    }
      
    inputHandler = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }

    loginSubmitHandler = (event, username) => {
      event.preventDefault()
      this.state.users.data.map(user => user.username === username ? this.setState({currentUser: user}) : this.props.history.push('/signup')) 
    }

    submitHandler = (event) => {
      event.preventDefault()
      let newPostOBJ = {
        type: "event",
        attributes: {
          user: this.state.currentUser
         ,         
          location: this.state.location,
          title: this.state.title,
          date: this.state.date,
          description: this.state.description,
          image_url: this.state.imageURL,
          price: this.state.price
        }
      }
      fetch(eventsURL, {
        method: "POST",
        headers: header,
        body: JSON.stringify(newPostOBJ)
      })
      .then(response => response.json())
      .then(newPost => this.setState({
        date: "", 
        description: "", 
        imageURL: "", 
        location: "", 
        title: "", 
        price: 0, 
        events: this.state.events.data.concat(newPost)}))
    }

  render(){
    console.log("state events", this.state.events)
    console.log("Current User", this.state.currentUser)
    const {date, title, imageURL, description, location, price} = this.state
    let Events = this.state.events
    return (
      <div className="App">
        <NavBar/>
        <Switch >
          <Route path='/profile/:id' component={ProfileContainer} /> // route to the profile page
          <Route path='/details/:id' component={EventDetails} /> // route to the details of a specific event
          <Route path='/homepage' render={(props) => <Dashboard {...props} event={Events} inputHandler={this.inputHandler} date={date} title={title} image={imageURL} description={description} location={location} price={price} submitHandler={this.submitHandler}/>}/> // route to the dashboard that renders all of the events
          <Route path='/events' component={UserEvents} events={this.state.events}/> // route to the events that the user has joined
          <Route path='/signup' component={SignUp} /> // route to the sign up page
          <Route path="/login" component={Login} loginSubmitHandler={this.loginSubmitHandler}/> // route to the log in page
          <Route exact path="/" component={HomePage} /> // route to the page that renders the log in and sign up aka "homepage"
        </Switch>
      </div>
    );
  }
}

export default App;