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
      volumes: [],
      loaded: true,
      placeholder: "Loading...",
      
    }
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  handleSearchQueryChange = (event) => {
    const newQuery = event.target.value
    this.setState({
      searchQuery: newQuery
    }, () => {
      console.log(this.state.searchQuery)
    })
  }

  handleVolumeChange = (volumes) => {
    console.log(volumes)
    console.log(volumes.map((book) => book.volumeInfo.title))
    // this.setState({
    //   volumes
    // }, () => {
    //   console.log(this.bookList)
    // })
  }

  get bookList() {
    return this.state.volumes;
  }

  render() {

    const { placeholder, searchQuery, loaded } = this.state;

    return (
      <div className="App">
        <div className="cover">Cover</div>
        <Search onChange={this.handleSearchQueryChange} />
        <DataLoader placeholder={placeholder} 
                    searchQuery={searchQuery} 
                    loaded={loaded} 
                    volumes={this.handleVolumeChange}
        />
        <div className="display">
          {this.bookList}
          <Book />
        </div>
      </div>
    );
  }
}

export default App;
