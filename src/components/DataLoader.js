import React from 'react';

const DataLoader = (props) => {

  const { placeholder, loaded, searchQuery } = props;

  return (
    <div>
      {loaded ? `Search query: ${searchQuery}` : placeholder}
    </div>
  )
}

export default DataLoader;