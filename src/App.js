import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from './components/back/data/Data';
import Cart from './components/front/cart/Cart';
import Header from './components/front/header/Header';
import Products from './components/front/products/Products';
import Signup from './components/front/signup/Signup';
import Sidebar from './components/front/sidebar/Sidebar';

import "./App.scss";
import { ItemContext } from './components/utils/ItemContext';

const App = () => {
  const { productItems } = useContext(ItemContext);
  console.log("yaya",productItems);
  const [cartItems, setCartItems] = useState([])

  const handleAddProduct = (product) => {
    console.log("haha bulaya", product);
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...productExist, quantity: productExist.quantity + 1 } : item))
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id)
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    }
    else {
      setCartItems(
        cartItems.map((item => item.id === product.id ? { ...productExist, quantity: productExist.quantity - 1 } : item))
      )
    }
  }

  const handleClearance = () => {
    setCartItems([])
  }

  const handleClearProduct = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id))

  }

  return (
    <div className='app'>
      <Router>
          <Header cartItems={cartItems} />

        <div className='container'>
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />}></Route>
            <Route path="/signup" exact element={<Signup />}></Route>
            <Route path="/cart" exact element={<Cart cartItems={cartItems} handleClearProduct={handleClearProduct} handleClearance={handleClearance} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}
export default App
