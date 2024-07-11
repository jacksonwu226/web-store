import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './contexts/ProductContext'
import CartSidebarProvider from './contexts/CartSidebarContext'
import CartProvider from './contexts/CartContext'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import Product from './components/Product/Product';
import CartSidebar from './components/CartSideBar/CartSidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: '/product/:id', element: <ProductDetails />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <CartSidebarProvider>
      <CartProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </CartProvider>
    </CartSidebarProvider>
  </React.StrictMode>,
)
