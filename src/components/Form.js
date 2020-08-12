import React from 'react';

class Form extends React.Component {

  state = {
    date: '',
    title: '',
    location: '',
    description: '',
    imageURL: '', 
    price: 0,
  }

  handleFormChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  clearFormFields = () => {
    this.setState({
      date: '',
      title: '',
      location: '',
      description: '',
      imageURL: '',
      price: 0,
    })
  }

    render() { 
        const {date, title, location, description, imageURL, price} = this.state
        return ( 
            <div className='ui segment'>
            <form className='ui form' onSubmit={(event) => {
              this.props.submitFormHandler(event, date, title, location, description, imageURL, price)
              this.clearFormFields()
              }}>
              <div className='inline fields'>
                <input type='date' name='date' value={date} onChange={(event) => this.handleFormChange(event)}/>
                <input type='text' name='title' placeholder='Title' value={title} onChange={(event) => this.handleFormChange(event)}/>
                <input type='text' name='location' placeholder='Locatio' value={location} onChange={(event) => this.handleFormChange(event)}/>
                <input type='text' name='description' placeholder='Description' value={description} onChange={(event) => this.handleFormChange(event)}/>
                <input type='text' name='imageURL' placeholder='ImageURL' value={imageURL} onChange={(event) => this.handleFormChange(event)}/>
                <input type='number' name='price' placeholder='Price' value={price} onChange={(event) => this.handleFormChange(event)}/>
              </div>
              <button className='ui button' type='submit'>Create Post</button>
            </form>
          </div>
        );
    }
}

export default Form;