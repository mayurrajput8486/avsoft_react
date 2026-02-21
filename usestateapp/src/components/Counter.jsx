import React from "react";
import { useState } from "react";

const Counter = () => {

    const [count,setCount] = useState(0)
    //count - this is a variable that hold initial value
    //setCount() is functional variable that update the initial value

    function increment (){
        setCount(count + 1)
    }

    function decrement (){
        if(count > 0){
            setCount(count - 1)
        }
       
    }

    function clearValue () {
        setCount(0)
    }
  return (
    <div>
      <h2 className="text-center">Counter App</h2>
      <div className="bg-dark w-25 p-2 mx-auto text-center rounded-3">
        <div className="btn-group">
          <button className="btn btn-success" onClick={increment}>+</button>
          <button className="btn btn-danger">{count}</button>
          <button className="btn btn-success" onClick={decrement}>-</button>
        </div>
        <br/>
        <button className="btn btn-warning mt-2" onClick={clearValue}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
