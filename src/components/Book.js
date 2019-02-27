import React from 'react'

const Book = (props) => {
  return (
    <div className="book">
      Title: {props.title}
    </div>
  )
}

export default Book;