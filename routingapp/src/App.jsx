
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/pages/Register'
import Career from './components/pages/Career'
import ErrorPage from './components/pages/ErrorPage'

const App = () => {
  return (
    <div>
        <Navbar/>   
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/career' element={<Career/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>   
    </div>
  )
}

export default App