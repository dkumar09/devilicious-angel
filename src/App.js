import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from './components/back/data/Data';
import Header from './components/front/header/Header';
import Cart from './components/front/cart/Cart';
import Products from './components/front/products/Products';
import Signup from './components/front/Signup/Signup';

const App = () => {
  const { productItems } = data;
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
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" exact element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />}>
          </Route>
          <Route path="/login" exact element={<Signup />}></Route>
          <Route path="/cart" exact element={<Cart cartItems={cartItems} handleClearProduct={handleClearProduct} handleClearance={handleClearance} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />}></Route>
        </Routes>


        {/* <RRoutes */}
        {/* productItems={productItems} */}
        {/* cartItems={cartItems} */}
        {/* handleAddProduct={handleAddProduct} */}
        {/* handleRemoveProduct={handleRemoveProduct} */}
        {/* handleClearance={handleClearance} */}
        {/* handleClearProduct={handleClearProduct} */}
        {/* /> */}
      </Router>

    </div>
  )
}

export default App
