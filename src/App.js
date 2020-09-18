import React from 'react';
import './App.css';
import { Route, Switch,} from 'react-router-dom';
import { HomePage, Dashboard, NavBar, EventDetails, UserEvents, ProfilePage } from './components/';
import { Login, SignUp} from './containers/';
const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() +1).toString().padStart(2, '0');
const day = today.getDate().toString().padStart(2, '0');
const currentDate = `${year}-${month}-${day}`;
const URL = 'http://localhost:3000/';
const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

//To Do
//actually be able to create an account

class App extends React.Component{

    state = { 
      currentUser: null, 
      events: [],
      pastEvents: [],  
      search: '', 
      sorted: '', 
      users: [], 
      joinedEvents: []
    }

    componentDidMount(){
      Promise.all([fetch(`${URL}/events`),fetch(`${URL}/users`),fetch(`${URL}/joined_events`)])
      .then(([eventsResponse, usersResponse, joinedEventsResponse]) => Promise.all([eventsResponse.json(), usersResponse.json(), joinedEventsResponse.json()]))
      .then(([eventOBJ, userOBJ, joinedEventOBJ]) => this.setState({
        events: eventOBJ.data.filter(event => event.attributes.date > currentDate),
        pastEvents: eventOBJ.data.filter(event => event.attributes.date < currentDate),
        users: userOBJ.data,
        joinedEvents: joinedEventOBJ.data
      }))
    } 

    setCurrentUser = (user) => {
      this.setState({currentUser: user})
    }

    searchPosts = (event) => {
      this.setState({search: event.target.value})
    }

    sortBy = (event) => {
      this.setState({sorted: event.target.value})
    }

    submitFormHandler = (event, date, title, location, description, imageURL, price) => {
      event.preventDefault()
      if(date.length !== 10){
        alert('Please enter a valid date')
      } else {
      let newPostOBJ = {
          user_id: this.state.currentUser.id, 
          location: location, 
          title: title,
          date: date, 
          description: description, 
          image_url: imageURL,
          price: price
      }
      fetch(`${URL}/events`, {method: "POST", headers: header, body: JSON.stringify(newPostOBJ)})
      .then(response => response.json())
      .then(eventOBJ => 
          fetch(`${URL}/events/${eventOBJ.id}`)
          .then(response => response.json())
          .then(event => this.setState({
              events: [event.data, ...this.state.events]
          }))
      )
      }
    }

    sortOptions = (Events) => {
      if(this.state.sorted === 'All'){
        Events.sort((a, b) => a.attributes.user.created_at < b.attributes.user.created_at ? -1 : 1)
      }
      else if(this.state.sorted === 'Title'){
        Events.sort((a,b) => a.attributes.title.localeCompare(b.attributes.title))
      }
      else if(this.state.sorted === 'Price'){
        Events.sort((a, b) => a.attributes.price > b.attributes.price ? -1 : 1)
      }
      else if(this.state.sorted === 'Date'){
        Events.sort((a,b) => a.attributes.date > b.attributes.date ? 1 : -1)
      }
    }

    submitRSVP = (id, title) => {
      alert(`Great Choice ${this.state.currentUser.attributes.name}! You have RSVP'ed to ${title}`)
      let rsvpOBJ = {user_id: this.state.currentUser.id, event_id: id}
      fetch(`${URL}/joined_events`, {method: "POST", headers: header, body: JSON.stringify(rsvpOBJ)})
      .then(response => response.json())
      .then(eventOBJ => 
            fetch(`${URL}/joined_events/${eventOBJ.id}`)
            .then(response => response.json())
            .then(rsvp => this.setState({
              joinedEvents: [...this.state.joinedEvents, rsvp.data]
            }))
          )
    }

    removeRSVP = (id) => {
      let events = this.state.joinedEvents.filter(je => je.id !== id)
      this.setState({joinedEvents: events})
      fetch(`${URL}/joined_events/${id}`, {
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
      fetch(`${URL}/events/${id}`, {
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
      fetch(`${URL}/events/${id}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
    }

  render(){
    let Events = this.state.events.filter(event => event.attributes.title.toLowerCase().includes(this.state.search.toLowerCase()))
    this.sortOptions(Events)
    return (
      <div className='App'>
        <NavBar currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
        <Switch >
          <Route path='/profile/:id' render={(props) => <ProfilePage {...props} 
            users={this.state.users} 
            events={this.state.events} 
            currentUser={this.state.currentUser} 
            updateCurrentUser={this.updateCurrentUser}/>} 
          /> 
          <Route path='/details/:id' render={(props) => <EventDetails {...props} 
            currentUser={this.state.currentUser} 
            deleteEvent={this.deleteEvent} 
            updateEvent={this.updateEvent}/> } 
          /> 
          <Route path='/events' render={(props) => <UserEvents {...props} 
            joinedEvents={this.state.joinedEvents} 
            currentUser={this.state.currentUser} 
            removeRSVP={this.removeRSVP}
            currentDate={currentDate}/>} 
          /> 
          <Route path='/homepage' render={(props) => <Dashboard {...props} 
            event={Events} 
            submitFormHandler={this.submitFormHandler} 
            searchPosts={this.searchPosts}
            searchPhrase={this.state.search} 
            sortBy={this.sortBy}
            currentUser={this.state.currentUser}
            submitRSVP={this.submitRSVP}/>}
          /> 
          <Route path='/signup' component={SignUp} /> 
          <Route exact path='/login' render={(props) => <Login {...props} setCurrentUser={this.setCurrentUser}/>}/> 
          <Route exact path='/' component={HomePage} /> 
        </Switch>
      </div>
    );
  }
}

export default App;