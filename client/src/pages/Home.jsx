import React from 'react'
import Navbar from '../components/Navbar'
import Anouncements from '../components/Anouncements'
import Categories from '../components/Categories'
import Products from '../components/Products'

function Home() {
  return (<>
    <Anouncements/>
    <Navbar/>
    <Categories/>
    <Products/>
    </>
  )
}

export default Home