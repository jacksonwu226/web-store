import { useState } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import Product from './components/Product/Product';
import CartSidebar from './components/CartSideBar/CartSidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CategoriesSidebar from './components/CategoriesSidebar/CategoriesSidebar';


function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <CategoriesSidebar />
      <CartSidebar />
      <Footer />
    </div>
  )
}

export default App
