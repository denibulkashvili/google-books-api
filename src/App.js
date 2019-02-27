import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Search from './components/Search';
import Book from './components/Book';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      data: [],
      loaded: false,
      placeholder: "Loading...",
      
    }
    this.handleSearchQuerySubmit = this.handleSearchQuerySubmit.bind(this);
  }

  handleSearchQuerySubmit = (newQuery) => {
    this.setState({
      searchQuery: newQuery,
      loaded: true
    }, () => {
      console.log(this.state.searchQuery);
      this.callAPI()
    })
  }

  callAPI() {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}`)
    .then((response) => {
      this.setState({
        data: response.data.items
      }, () => {
        console.log("Logging data ..")
        console.log(this.state.data)
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  renderBooks() {
    return <Book title={"Harrrry Potter"}/>
  }

  render() {

    return (
      <div className="App">
        <div className="cover">Cover</div>
        <Search onSearchSubmit={this.handleSearchQuerySubmit} />
        <div className="display">
          {this.renderBooks()}
        </div>
      </div>
    );
  }
}

export default App;
