import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from 'react-icons/fi';
import CartItem from "../components/CartItem/CartItem";
import { CartContext } from "../contexts/CartContext";

export default function CartSummary() {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div className="container mx-auto p-8 pt-32">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p>Your cart is currently empty.</p>
          <Link to="/" className="mt-4 text-primary hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-y-4">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center border-t pt-4">
              <h2 className="text-xl font-semibold">Total:</h2>
              <span className="text-xl font-semibold">{parseFloat(total).toFixed(2)}</span>
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button 
                onClick={clearCart}
                className="py-2 px-4 bg-winter-blue-dark text-white rounded hover:bg-winter-blue-dark/70 transition duration-300 flex items-center gap-2"
              >
              <FiTrash2 />
                Clear Cart
              </button>
              <Link 
                to="/checkout" 
                className="py-2 px-4 bg-primary text-white rounded hover:bg-primary/70 transition duration-300"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
