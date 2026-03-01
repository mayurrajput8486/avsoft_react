import React from 'react'
import Parent from './components/Parent'

const App = () => {
  return (
    <div>
      <h1>React.memo(), useMemo(), useCallback() </h1>
      <Parent/>
    </div>
  )
}

export default App