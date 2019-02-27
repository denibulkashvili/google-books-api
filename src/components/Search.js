import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value 
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.value)
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={ this.handleSubmit }>
          <label>
            Search
            <input type="text" name="name" onChange={ this.handleChange }/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
  
}

export default Search;

