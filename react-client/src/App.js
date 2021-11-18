import React from 'react'
import { CartProvider } from 'react-use-cart'
import Courses from './components/Courses'
import HomeNavBar from './components/NavBar'
import Cart from './components/Cart'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <>
      <CartProvider>
        <HomeNavBar />
        <Courses />
        <Cart />
      </CartProvider>
    </>
  )
}

export default App
