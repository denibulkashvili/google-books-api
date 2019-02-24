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
  }

  render() {
    return (
      <div className="App">
        <div className="cover">Cover</div>
        <Search />
        <div className="display">
          <Book />
        </div>
      </div>
    );
  }
}

export default App;
