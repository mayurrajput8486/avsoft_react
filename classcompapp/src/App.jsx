import React from "react";
import Counter from "./components/Counter";
import "./App.css";
const App = () => {
  return (
    <div>
      <h1 className="header">Learn Class Comp in React</h1>
      <Counter topic='learn states and props'/>
    </div>
  );
};

export default App;
