import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Feature from './components/Feature'
import Special from './components/Special'
import NewProduct from './components/NewProduct'
import Subscribed from './components/Subscribed'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Feature />
      <Special />
      <NewProduct />
      <Subscribed />
      <Footer />
    </div>
  )
}

export default App