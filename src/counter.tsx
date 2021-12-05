import React from 'react';

export default (props) => {
  const [count, setCount] = React.useState(0)

  const incrementCount = () => {
    // apicall
    // remote stor wil do the apiCall
    setCount(count + 1)
  }

  return (
    <div>
      <div>Count: {count}</div>
      <div>Additional Count: {props.additionalCount}</div>
      <button onClick={incrementCount}>  Increment Count </button>
    </div>
  );
};