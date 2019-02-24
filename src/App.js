import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';
import DataLoader from './components/DataLoader';
import Book from './components/Book';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      placeholder: "Loading...",
      data:[]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const newQuery = event.target.value
    this.setState({
      searchQuery: newQuery
    }, () => {
      console.log(this.state.searchQuery)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="cover">Cover</div>
        <Search onChange={this.handleChange} />
        <div className="display">
          <Book />
        </div>
      </div>
    );
  }
}

export default App;
