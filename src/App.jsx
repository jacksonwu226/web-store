import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import Product from './components/Product/Product';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product/:id' ,
    element: <ProductDetails />
  }
]);

function App() {
  return (
    <div className="app">
      <Header />
      <RouterProvider router={router} />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App
