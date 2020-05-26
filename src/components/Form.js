import React from 'react'

class Form extends React.Component {
    render() { 
        const {date, title, location, imageURL, description, price} = this.props
        return ( 
            <div className="ui segment">
            <form className="ui form" onSubmit={(event) => this.props.submitFormHandler(event)}>
              <div className="inline fields">
                <input type="date" name="date" value={date} onChange={(event) => this.props.inputHandler(event)}/>
                <input type="text" name="title" placeholder="Title" value={title} onChange={(event) => this.props.inputHandler(event)}/>
                <input type="text" name="location" placeholder="Location" value={location} onChange={(event) => this.props.inputHandler(event)}/>
                <input type="text" name="description" placeholder="Description" value={description} onChange={(event) => this.props.inputHandler(event)}/>
                <input type="text" name="imageURL" placeholder="ImageURL" value={imageURL} onChange={(event) => this.props.inputHandler(event)}/>
                <input type="number" name="price" placeholder="Price" value={price} onChange={(event) => this.props.inputHandler(event)}/>
              </div>
              <button className="ui button" type="submit">Create Post</button>
            </form>
          </div>
        );
    }
}
 
export default Form;