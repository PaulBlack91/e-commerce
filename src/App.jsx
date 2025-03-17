import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Carrousel from './components/Carrousel/Carrousel'
import Banner from './components/Banner/Banner'
import Products from './components/Products/Products'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Carrousel />
      <Products />
    </div>
  )
}

export default App