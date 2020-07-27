import React from 'react';
import './App.css';
import { Route, Switch,} from 'react-router-dom';
import { HomePage, Dashboard, NavBar, EventDetails, UserEvents, ProfilePage } from './components/';
import { Login, SignUp} from './containers/'
const eventsURL = "http://localhost:3000/events"
const joinedEventsURL = "http://localhost:3000/joined_events"
const header = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}
const today = new Date()
const year = today.getFullYear()
const month = (today.getMonth() +1).toString().padStart(2, '0')
const day = today.getDate()
const currentDate = `${year}-${month}-${day}`
console.log(typeof(currentDate))
console.log(typeof(month))


//To Do
//to compare dates must be in this format "2020-06-05"
//past events will show as previously attended on user events page
//have form field for url clear out after submission
//actually be able to create an account
//convert entire project using hooks and context

class App extends React.Component{

    state = { 
      currentUser: null, 
      events: [],
      pastEvents: [], 
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
      Promise.all([fetch(eventsURL),fetch("http://localhost:3000/users"),fetch('http://localhost:3000/joined_events')])
      .then(([eventsResponse, usersResponse, joinedEventsResponse]) => Promise.all([eventsResponse.json(), usersResponse.json(), joinedEventsResponse.json()]))
      .then(([eventOBJ, userOBJ, joinedEventOBJ]) => this.setState({
        events: eventOBJ.data.filter(event => event.attributes.date > currentDate),
        pastEvents: eventOBJ.data.filter(event => event.attributes.date < currentDate),
        users: userOBJ.data,
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
        Events.sort((a,b) => a.attributes.date > b.attributes.date ? 1 : -1)
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

    removeRSVP = (id) => {
      let events = this.state.joinedEvents.filter(je => je.id !== id)
      this.setState({joinedEvents: events})
      fetch(`http://localhost:3000/joined_events/${id}`, {
        method: 'DELETE'
      })
    }

    updateCurrentUser = (user) => {
      this.setState({currentUser: user.data, users: this.state.users.map(userOBJ => userOBJ.id === user.id ? user.data : userOBJ)})
    }

    handleLogout = () => {
      this.setState({currentUser: null})
    }

    updateEvent = (event, date, title, location, description, image_url, price, id) => {
      event.preventDefault()
      let editedEvent = {
          location: location,
          title: title,
          date: date,
          description: description,
          image_url: image_url,
          price: price
      }
      fetch(`http://localhost:3000/events/${id}`, {
          method: 'PATCH',
          headers: header,
          body: JSON.stringify(editedEvent)
      })
      .then(response => response.json())
      .then(event => {
        let updatedEvent = this.state.events.map(eventObj => {
          return eventObj.id === id ? event.data : eventObj
        })
        this.setState({events: updatedEvent})
      })
    }

    deleteEvent = (id) => {
      this.setState({events: this.state.events.filter(event => event.id !== id)})
      fetch(`${eventsURL}/${id}`, {method: 'DELETE'}).then(response => response.json())
    }

  render(){
    console.log('Events', this.state.events)
    console.log(currentDate)
    console.log('Past Events', this.state.pastEvents)
    let Events = this.state.events.filter(event => event.attributes.title.toLowerCase().includes(this.state.sort.toLowerCase()))
    this.sortOptions(Events)
    const {date, title, imageURL, description, location, price} = this.state
    return (
      
      <div className="App">
        <NavBar currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
        <Switch >
          <Route path='/profile/:id' render={(props) => <ProfilePage {...props} 
            users={this.state.users} 
            events={Events} 
            currentUser={this.state.currentUser} 
            updateCurrentUser={this.updateCurrentUser}/>} 
          /> {/* route to the profile page*/}
          <Route path='/details/:id' render={(props) => <EventDetails {...props} 
            currentUser={this.state.currentUser} 
            deleteEvent={this.deleteEvent} 
            updateEvent={this.updateEvent} 
            date={date} imageURL={imageURL} 
            description={description} 
            title={title} price={price} 
            location={location}  /> } 
          /> {/*route to the details of a specific event*/}
          <Route path='/events' render={(props) => <UserEvents {...props} 
            joinedEvents={this.state.joinedEvents} 
            currentUser={this.state.currentUser} 
            removeRSVP={this.removeRSVP}/>} 
          /> {/*route to the events that the user has joined*/}
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
          <Route path='/signup' component={SignUp} /> {/*route to the sign up page */}
          <Route exact path="/login" render={(props) => <Login {...props} setCurrentUser={this.setCurrentUser}/>}/> 
          <Route exact path="/" component={HomePage} /> 
        </Switch>
      </div>
    );
  }
}

export default App;