import React from 'react';
import "../index.css";

export default ({ additionalCount }: { additionalCount: string }) => {
  const [count, setCount] = React.useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="container">
      <div>Count: {count}</div>
      <div>Additional Count: {additionalCount}</div>
      <button onClick={incrementCount}>  Increment Count </button>
    </div>
  );
};