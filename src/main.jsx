import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './contexts/ProductContext'
import CartSidebarProvider from './contexts/CartSidebarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartSidebarProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartSidebarProvider>
  </React.StrictMode>,
)
