import React from 'react';
import axios from 'axios';

const DataLoader = (props) => {

  const { placeholder, loaded, searchQuery } = props;

  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
    .then((response) => {
      props.volumes(response.data.items)
    })
    .catch((error) => {
      console.log(error)
    })


  return (
    <div>
      {loaded ? `Search query: ${searchQuery}` : placeholder}
    </div>
  )
}

export default DataLoader;