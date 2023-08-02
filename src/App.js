import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Product from './components/Product';
import Aproduct from './modules/Aproduct';
import CategoriesProduct from './modules/CategoriesProduct';
import Cart from './modules/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Aproduct />} />
        <Route path="/categories/:name" element={<CategoriesProduct />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<div className='m-20'>-404-</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
