import React from 'react';

const Search = (props) => {
  return (
    <div className="search">
      <label htmlFor="book-search" className="search-label"> <span>Look</span> up the <span>book</span>:</label>
      <input type="search" 
            id="book-search" 
            className="search-input" 
            onChange={ (event)=>props.onChange(event) }
      />
    </div>
  )
}

export default Search;