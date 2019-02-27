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
      <div className="book">
        Title: {this.props.title} 
        Authors: {this.authors}
        Link: {this.props.url}
        <img src={this.props.cover} />
      </div>
    )
  }
}

export default Book;