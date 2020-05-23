import React from 'react'

class Form extends React.Component {
    render() { 
        return ( 
            <div className="ui segment">
            <form className="ui form" onSubmit={null}>
              <div className="inline fields">
                <input type="date" name="date" value={""} onChange={null}/>
                <input type="text" name="title" placeholder="Title" value={""} onChange={null}/>
                <input type="text" name="location" placeholder="Location" value={""} onChange={null}/>
                <input type="text" name="description" placeholder="Description" value={""} onChange={null}/>
                <input type="text" name="image" placeholder="ImageURL" value={""} onChange={null}/>
                <input type="number" name="amount" placeholder="Price" value={""} onChange={null}/>
              </div>
              <button className="ui button" type="submit">
               Create Post
              </button>
            </form>
          </div>
         );
    }
}
 
export default Form;