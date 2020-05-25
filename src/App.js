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
      users: [],
      events: [],
      joinedEvents: [], 
      displayEvents: [],
      date: "", 
      title: "", 
      imageURL: "", 
      description: "", 
      location: "", 
      price: 0,
      sort: "",
      sorted: ""
    }

    componentDidMount(){
      fetch(eventsURL)
      .then(response => response.json())
      .then(eventData => this.setState({events: eventData.data.map(event => event.attributes)}, this.receiveUserData()))
    }

    receiveUserData(){
      fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(users => this.setState({users: users.data.map(user => user.attributes)}, this.receiveUserEventData()))
    }

    receiveUserEventData(){
      fetch('http://localhost:3000/joined_events')
      .then(response => response.json())
      .then(joined => this.setState({ joinedEvents: joined.data.map(d => d.attributes)}))
    }
      
    inputHandler = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }
    
    searchPosts = (event) => {this.setState({sort: event.target.value})}

    sortBy = (event) => {
      this.setState({sorted: event.target.value})
    }


    submitHandler = (event) => {
      event.preventDefault()
      let newPostOBJ = {
        type: "event",
        attributes: {
          user: this.state.currentUser,         
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
    let attending = this.state.joinedEvents.filter(je => je.user.id === 2) //once we have login figured out, we can replace hardcoded 2 with currentUser.id
    let currentUser = this.state.users.find(user => user.username === 'dortha') //this is hard coded at the moment, once we have login figured out we can render the profile page based on finding the currentUser in users
    let Events = this.state.events.filter(event => event.title.toLowerCase().includes(this.state.sort.toLowerCase()))
    const {date, title, imageURL, description, location, price} = this.state

    if(this.state.sorted === "All"){
      Events.sort((a, b) => a.user.created_at < b.user.created_at ? -1 : 1)
    }
    else if(this.state.sorted === "Title"){
      Events.sort((a,b) => a.title.localeCompare(b.title))
    }
    else if(this.state.sorted === "Price"){
      Events.sort((a, b) => a.price > b.price ? -1 : 1)
    }
    else if(this.state.sorted === "Date"){
      Events.sort((a,b) => a.date > b.date ? -1 : 1)
    }
    
    return (
      <div className="App">
        <NavBar/>
        <Switch >
          <Route path='/profile/:id' render={(props) => <ProfileContainer {...props} user={currentUser}/>} /> // route to the profile page
          <Route path='/details/:id' component={EventDetails} /> // route to the details of a specific event
          <Route path='/homepage' render={(props) => <Dashboard {...props} event={Events} inputHandler={this.inputHandler} date={date} title={title} image={imageURL} description={description} location={location} price={price} submitHandler={this.submitHandler} searchPosts={this.searchPosts} sortBy={this.sortBy}/>}/> 
          <Route path='/events' render={(props) => <UserEvents {...props} attending={attending} />} /> // route to the events that the user has joined
          <Route path='/signup' component={SignUp} /> // route to the sign up page
          <Route path="/login" component={Login} loginHandler={this.loginHandler}/> // route to the log in page
          <Route exact path="/" component={HomePage} /> // route to the page that renders the log in and sign up aka "homepage"
        </Switch>
      </div>
    );
  }
}

export default App;