import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import{
  BrowserRouter, Routes,Route,Router} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
  const user = true;

  return (
    <BrowserRouter>
    <Routes>
    <Route  path='/' element= {<Home/>}></Route>   
    <Route path='/products/:category' element= {<ProductList/>}></Route>   
    <Route path='/product/:id' element= {<Product/>}></Route>   
    <Route path='/cart' element= {<Cart/>}></Route>   
    <Route path='/login' element= {<Login/>}></Route>   
    <Route path='/register' element= {<Register/>}></Route>   
     
    </Routes>
    </BrowserRouter>
   
  )
}

export default App

