import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



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
      <form onSubmit={ this.handleSubmit } className="search">
        <input type="text" 
               name="name" 
               onChange={ this.handleChange } 
               className="search-input" 
               placeholder="Search books"
               required
        />
        <button type="submit"><FontAwesomeIcon icon={faSearch} className="search-button"/></button>
      </form>
      
    )
  }
  
}

export default Search;

