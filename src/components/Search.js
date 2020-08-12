import React from 'react'

class Search extends React.Component {
    render() { 
        return ( 
            <div className="ui large fluid icon input" style={{width: 1400, marginLeft: 15}}>
                <input 
                type="text" 
                value={this.props.searchPhrase}
                placeholder={"Search for a Post"} 
                onChange={(event) => this.props.searchPosts(event)}
                />
                <i className="circular search link icon"></i>
                <strong style={{marginLeft: 15, marginRight: 15}}>Sort By:</strong>
                <select style={{width: 300}} onChange={(event) => this.props.sortBy(event)}>
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