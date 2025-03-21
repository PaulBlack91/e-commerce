import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Carrousel from './components/Carrousel/Carrousel'
import Banner from './components/Banner/Banner'
import Products from './components/Products/Products'
import Blogs from './components/Blogs/Blogs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Carrousel />
      <Products />
      <Blogs/>
    </div>
  )
}

export default App