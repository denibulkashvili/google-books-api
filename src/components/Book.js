import React, { Component } from 'react'



class Book extends Component {
  
  get authors() {
    const authors = this.props.authors;
    if (authors === undefined) {
      return "Unknown";
    }
    return authors.length === 1 ? authors[0] : authors.join(", ");
  }

  render() {
    return (
      <div className="book-wrapper">
        <img src={this.props.cover} alt="book-cover"/>
        Title: {this.props.title} 
        Authors: {this.authors}
        Link: <a href={this.props.url}>See Inside</a>
      </div>
    )
  }
}

export default Book;