import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx' 
import About from './About.jsx'
import Intro from './Intro.jsx'
import Gallery from './Gallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home/>
    <About/>
    <Gallery/>
    <Intro/>
  </StrictMode>,
)
