
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/pages/Register'
import Career from './components/pages/Career'
import ErrorPage from './components/pages/ErrorPage'
import Products from './components/pages/Products'
import ProductDetails from './components/pages/ProductDetails'

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
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>   
    </div>
  )
}

export default App