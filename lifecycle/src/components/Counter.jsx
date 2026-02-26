import React from "react";
import { useState, useEffect } from "react";
const Counter = () => {
  const [count, setcount] = useState(0);

  //This useEffect () hook creates multiple mounting phase for one comp
  /* useEffect(() => {
    console.log("Comp Mounted");
  }); */

  //use [] - blank dependency array to prevent mulitple mounting of react comp
  /* useEffect(() => {
    console.log("Comp Mounted");
  }, []); */

  /* useEffect(() => {
    console.log("Comp Updated");
  }, [count === 10]); */

  //use cleanup function 

  useEffect(()=>{
    console.log('Comp Mounted and Update')
    return ()=>{
        console.log('Comp Unmounted')
    }
  },[])

  return (
    <div>
      <h2>Counter App</h2>
      <div>
        <button onClick={() => setcount(count + 1)}>+</button>
        <button>{count}</button>
        <button onClick={() => setcount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
