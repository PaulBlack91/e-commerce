import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Carrousel from './components/Carrousel/Carrousel'
import Banner from './components/Banner/Banner'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Carrousel />
    </div>
  )
}

export default App