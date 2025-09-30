
import './App.css'
import Header from './component/Header'
import Home from './pages/Home'
import Footer from './component/Footer'
import Product from './pages/Product'
import Ctegories from './pages/Ctegories'
import Offer from './pages/Offer'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import { Link } from 'react-router-dom'

function App() {
  

  return (
    <>
<Header/>

    

    <Home/>
    <Product />
    <Ctegories/>
    <Offer/>
    <Aboutus/>
    <Contact/>


  <Footer/>
    
    </>
  )
}

export default App
