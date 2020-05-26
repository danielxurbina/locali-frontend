import React from 'react'

class Search extends React.Component {
    render() { 
        return ( 
            <div className="ui large fluid icon input">
                <input 
                type="text" 
                placeholder={"Search for a Post"} 
                onChange={(event) => this.props.searchPosts(event)}
                />
                <i className="circular search link icon"></i>
                <strong>Sort By:</strong>
                <select onChange={(event) => this.props.sortBy(event)}>
                    <option value="All">All</option>
                    <option value="Title">Title</option>
                    <option value="Price">Price</option>
                    <option value="Date">Event Date</option>
                </select>
            </div>    
        );
    }
}
 
export default Search;