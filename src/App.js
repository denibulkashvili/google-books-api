import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import noImage from './images/noImage.jpg'
import octocat from './images/octocat.png'
import spinner from './images/spinner.gif'


import Search from './components/Search';
import Book from './components/Book';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      data: [],
      loading: false,
      placeholder: "Loading...",
    }
    this.handleSearchQuerySubmit = this.handleSearchQuerySubmit.bind(this);
  }

  handleSearchQuerySubmit = (newQuery) => {
    this.setState({
      searchQuery: newQuery
    }, () => {
      console.log(this.state.searchQuery);
      this.callAPI()
    })
  }

  callAPI() {
    const formattedQuery = this.state.searchQuery.split(" ").join("+") 
    console.log(`Formatted: ${formattedQuery}`)
    this.setState({ loading: true })
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${formattedQuery}`)
    .then((response) => {
      this.setState({
        data: response.data.items,
        loading: false
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
                                            cover={
                                              book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : noImage
                                            }
                                      />)
    
  }

  render() {

    return (
      
      <div className="App">
        <div className="banner"></div>
        <a href="https://github.com/denibulkashvili/google-books-api">
          <img src={octocat} alt="octocat-icon" className="octocat-icon"/>
        </a>
        <Search onSearchSubmit={this.handleSearchQuerySubmit} />
        
        {this.state.loading ? <img src={spinner} alt="spinner" className="spinner" /> : <div className="books-grid"> {this.renderedBooks} </div>}
        
      </div>
    );
  }
}

export default App;
