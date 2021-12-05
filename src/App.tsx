import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from './counter.tsx';
import Health from './health.tsx'

const App = (props) => (
  <div className="container">
    <Counter additionalCount={props.additionalCount} />
    <div style={{ marginTop: '100px' }} />
    <Health />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
