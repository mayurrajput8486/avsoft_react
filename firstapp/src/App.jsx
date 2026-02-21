import { Fragment } from "react"; // Built in Comp

import Home from "./components/Home"
import Login from "./components/Login"

function App() {
  //array method for multiple html element
  /* return [
  <h1>Parent or Root Comp</h1>,
  <h1>I am second element</h1>,
  <h1>I am Array Method</h1>
] */

  //fragment method multiple html element
  /* return (
    <Fragment>
      <h1>Parent or Root Comp</h1>
      <h1>I am second element</h1>
      <h1>I am Fragment Method</h1>
    </Fragment>
  ); */

  //div method
  /* return (
    <div>
      <h1>Parent or Root Comp</h1>
      <h1>I am second element</h1>
      <h1>I am div Method</h1>
    </div>
  ); */

  return (
    <>
      <h1>Parent or Root Comp</h1>
      <h1>I am second element</h1>
      <h1>I am jsx fragment or sugar syntax  Method</h1>
      <Home></Home>
      <Login/>
    </>
  );
}
export default App;
