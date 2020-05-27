import React from 'react';
import './App.css';
import { Route, Switch,} from 'react-router-dom';
import { HomePage, Dashboard, NavBar, EventDetails, UserEvents, ProfilePage } from './components/';
import { Login, SignUp, ProfileContainer} from './containers/'
const eventsURL = "http://localhost:3000/events"
const joinedEventsURL = "http://localhost:3000/joined_events"
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
      sort: "", 
      sorted: "", 
      users: [], 
      joinedEvents: []
    }

    componentDidMount(){
      Promise.all([
        fetch(eventsURL),
        fetch("http://localhost:3000/users"),
        fetch('http://localhost:3000/joined_events')
      ])
      .then(([eventsResponse, usersResponse, joinedEventsResponse]) => Promise.all([eventsResponse.json(), usersResponse.json(), joinedEventsResponse.json()]))
      .then(([eventOBJ, userOBJ, joinedEventOBJ]) => this.setState({
        events: eventOBJ.data,
        users: userOBJ.data.map(user => user.attributes),
        joinedEvents: joinedEventOBJ.data
      }))
    }
    
    inputHandler = (event) => {this.setState({[event.target.name]: event.target.value})}
    
    searchPosts = (event) => {this.setState({sort: event.target.value})}

    sortBy = (event) => {this.setState({sorted: event.target.value})}

    setCurrentUser = (user) => {this.setState({currentUser: user})}

    submitFormHandler = (event) => {
      event.preventDefault()
      let newPostOBJ = {
          user_id: this.state.currentUser.id, 
          location: this.state.location, 
          title: this.state.title,
          date: this.state.date, 
          description: this.state.description, 
          image_url: this.state.imageURL,
          price: this.state.price
      }
      fetch(eventsURL, {method: "POST", headers: header, body: JSON.stringify(newPostOBJ)})
      .then(response => response.json())
      .then(eventOBJ => 
          fetch(`${eventsURL}/${eventOBJ.id}`)
          .then(response => response.json())
          .then(event => this.setState({
              date: "", 
              description: "", 
              imageURL: "", 
              location: "", 
              title: "", 
              price: 0, 
              events: [...this.state.events, event.data]
          }))
      )
    }

    sortOptions = (Events) => {
      if(this.state.sorted === "All"){
        Events.sort((a, b) => a.attributes.user.created_at < b.attributes.user.created_at ? -1 : 1)
      }
      else if(this.state.sorted === "Title"){
        Events.sort((a,b) => a.attributes.title.localeCompare(b.attributes.title))
      }
      else if(this.state.sorted === "Price"){
        Events.sort((a, b) => a.attributes.price > b.attributes.price ? -1 : 1)
      }
      else if(this.state.sorted === "Date"){
        Events.sort((a,b) => a.attributes.date > b.attributes.date ? -1 : 1)
      }
    }

    submitRSVP = (id) => {
      let rsvpOBJ = {user_id: this.state.currentUser.id, event_id: id}
      fetch(joinedEventsURL, {method: "POST", headers: header, body: JSON.stringify(rsvpOBJ)})
      .then(response => response.json())
      .then(eventOBJ => 
            fetch(`${joinedEventsURL}/${eventOBJ.id}`)
            .then(response => response.json())
            .then(rsvp => this.setState({joinedEvents: [...this.state.joinedEvents, rsvp.data]}))
          )
    }

  render(){
    //once we have login figured out, we can replace hardcoded 2 with currentUser.id
    // let attending = this.state.joinedEvents.filter(je => je.user.id === this.state.currentUser.id) 
    //this is hard coded at the moment, once we have login figured out we can render the profile page based on finding the currentUser in users
    let loggedInUser = this.state.users.find(user => user.username === "corinne_wiza") 
    let Events = this.state.events.filter(event => event.attributes.title.toLowerCase().includes(this.state.sort.toLowerCase()))

    this.sortOptions(Events)

    console.log("Current User", this.state.currentUser)

    const {date, title, imageURL, description, location, price} = this.state
    return (
      <div className="App">
        <NavBar/>
        <Switch >
          <Route path='/profile/:id' render={(props) => <ProfilePage {...props} user={loggedInUser}/>} /> // route to the profile page
          <Route path='/details/:id' component={EventDetails} /> // route to the details of a specific event
          <Route path='/events' render={(props) => <UserEvents {...props} joinedEvents={this.state.joinedEvents} currentUser={this.state.currentUser}/>} /> // route to the events that the user has joined
          <Route path='/homepage' render={(props) => <Dashboard {...props} 
            event={Events} 
            inputHandler={this.inputHandler} 
            date={date} 
            title={title} 
            image={imageURL} 
            description={description} 
            location={location} 
            price={price} 
            submitFormHandler={this.submitFormHandler} 
            searchPosts={this.searchPosts} 
            sortBy={this.sortBy}
            currentUser={this.state.currentUser}
            submitRSVP={this.submitRSVP}/>}
          /> 
          <Route path='/signup' component={SignUp} /> // route to the sign up page
          <Route exact path="/login" render={(props) => <Login {...props} setCurrentUser={this.setCurrentUser}/>}/> // route to the log in page
          <Route exact path="/" component={HomePage} /> // route to the page that renders the log in and sign up aka "homepage"
        </Switch>
      </div>
    );
  }
}

export default App;