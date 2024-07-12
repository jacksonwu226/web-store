import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './contexts/ProductContext'
import CartSidebarProvider from './contexts/CartSidebarContext'
import CartProvider from './contexts/CartContext'
import CategoriesSidebarProvider from './contexts/CategoriesSidebarContext.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Category from './pages/Category.jsx'
import './index.css';
import CartSummary from './pages/CartSummary.jsx'
import Checkout from './pages/Checkout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: '/product/:id', element: <ProductDetails />},
      {path: '/category/:category', element: <Category />},
      {path: '/cart-summary', element: <CartSummary />},
      {path: '/checkout', element: <Checkout />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoriesSidebarProvider>
      <CartSidebarProvider>
        <CartProvider>
          <ProductProvider>
            <RouterProvider router={router} />
          </ProductProvider>
        </CartProvider>
      </CartSidebarProvider>
    </CategoriesSidebarProvider>
  </React.StrictMode>,
)
