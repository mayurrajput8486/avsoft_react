import React from 'react'
import Products from './components/Products'
/* import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js' */
const App = () => {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold text-orange-400'>Learn API Fetching</h1>
      <Products/>
    </div>
  )
}

export default App