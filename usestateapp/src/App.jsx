import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import Counter from './components/Counter.jsx'

const App = () => {
  return (
    <div>
      <h2 className='text-center text-danger'>Learn State Management</h2>
      <Counter/>
    </div>
  )
}

export default App