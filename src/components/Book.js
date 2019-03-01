import React, { Component } from 'react'




class Book extends Component {
  
  get authors() {
    const authors = this.props.authors;
    if (authors === undefined) {
      return "Author: Unknown";
    }
    return authors.length === 1 ? `Author: ${authors[0]}` : `Authors: ${authors.join(", ")}` ;
  }


  render() {
    return (
      <div className="book-wrapper">
        <img className="book-cover" src={this.props.cover} alt="book-cover"/>
        <div className="book-content">
          <p className="book-title">Title: {this.props.title} </p>
          <p className="book-authors">{this.authors} </p>
          <p className="book-authors">Publisher: {this.props.publisher}</p> 
        </div>
        <button className="book-url"><a href={this.props.url}>See the Book</a></button>
      </div>
    )
  }
}

export default Book;