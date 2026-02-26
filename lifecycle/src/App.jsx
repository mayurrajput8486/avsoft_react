import React, { useState } from 'react'
import Counter from './components/Counter'

const App = () => {
  const [show, setshow] = useState(true)
  return (
    <div>
      <h1>Lifecycle of React Comp</h1>
      <h2>Learn useEffect () Hook </h2>
      <button onClick={()=>setshow(!show)}>
        {
          show ? "comp unmounted" : "comp mount"
        }
      </button>
      {
        show ? <Counter/> : <h2>Comp Unmounted</h2>
      }
      
    </div>
  )
}

export default App