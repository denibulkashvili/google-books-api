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
      data: [],
      loaded: false,
      placeholder: "Loading...",
      
    }
    this.handleSearchQuerySubmit = this.handleSearchQuerySubmit.bind(this);
  }

  handleSearchQuerySubmit = (data) => {
    console.log(data)
    // this.setState({
    //   searchQuery: newQuery,
    //   loaded: true
    // }, () => {
    //   console.log(this.state.searchQuery)
    // })
  }
  renderBooks() {
    return <Book />
  }

  render() {

    let { placeholder, searchQuery, loaded } = this.state;

    return (
      <div className="App">
        <div className="cover">Cover</div>
        <Search onSearchSubmit={this.handleSearchQuerySubmit} />
        <DataLoader placeholder={placeholder} 
                    searchQuery={searchQuery} 
                    loaded={loaded} 
                    data={this.state.data}
        />
        <div className="display">
          {this.renderBooks()}
        </div>
      </div>
    );
  }
}

export default App;
