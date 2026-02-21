
/* import React from "react";
import ChildA from "./components/ChildA";
const App = () => {
  return (
    <div>
      <h1>Learn Context API</h1>
      <div
        style={{
          border: "2px solid",
          textAlign: "center",
          padding: "5px",
        }}
      >
        <h2>Parent Comp</h2>
        <ChildA founder="Jordan Walke"/>
      </div>
    </div>
  );
};

export default App; */

import React from "react";
import ChildA from "./components/ChildA";
import FounderContext from "./context/Founder";
import PersonContext from "./context/person";
import UserContext from "./context/users";
const App = () => {
  return (
    <div>
      <h1>Learn Context API</h1>
      <div
        style={{
          border: "2px solid",
          textAlign: "center",
          padding: "5px",
        }}
      >
        <h2>Parent Comp</h2>
        <UserContext.Provider value="Rohit Sharma">
          <FounderContext.Provider value="Jordan Walke">
          <PersonContext.Provider value="Virat Kohli">
            <ChildA/>
          </PersonContext.Provider>
        </FounderContext.Provider>
        </UserContext.Provider>
        
      </div>
    </div>
  );
};

export default App;
