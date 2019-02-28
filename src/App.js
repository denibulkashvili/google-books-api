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
    const formattedQuery = this.state.searchQuery.split(" ").join("+") 
    console.log(`Formatted: ${formattedQuery}`)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${formattedQuery}`)
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

  get renderedBooks() {
    const booksList = this.state.data
    
    return booksList.map((book, i) => <Book title={book.volumeInfo.title} 
                                            key={i}
                                            authors={book.volumeInfo.authors}
                                            publisher={book.volumeInfo.publisher}
                                            url={book.volumeInfo.previewLink}
                                            cover={book.volumeInfo.imageLinks.thumbnail}
                                      />)
    
  }

  render() {

    return (
      <div className="App">
        <div className="banner"></div>
        <Search onSearchSubmit={this.handleSearchQuerySubmit} />
        <div className="books-grid">
          {this.renderedBooks}
        </div>
      </div>
    );
  }
}

export default App;
