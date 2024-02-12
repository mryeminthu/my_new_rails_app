import React from 'react';

const Greeting = ({ greeting, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return <h1>{greeting}</h1>;
};

export default Greeting;
