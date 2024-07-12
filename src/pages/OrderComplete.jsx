import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function OrderComplete() {
  const location = useLocation();
  const cart = location.state?.cart || [];
  const formData = location.state?.formData || {};
  const total = location.state?.total || parseFloat(0).toFixed(2);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 mt-32">Thank You for Your Order!</h1>
      <p className="mb-6">Your order has been placed successfully. We appreciate your business!</p>
      
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="mb-8">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between  py-2">
            <span>{item.title}</span>
            <span>${parseFloat(item.price).toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between border-t py-2 font-semibold">
          <span>Total</span>
          <span>${parseFloat(total).toFixed(2)}</span>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
      <div className="mb-8 p-4 border rounded-lg shadow-md text-gray-500">
        <div className="mb-4">
          <strong className="block mb-1">Name:</strong>
          <span>{formData.name || 'N/A'}</span>
        </div>
        <div className="mb-4">
          <strong className="block mb-1">Address:</strong>
          <span>{formData.address || 'N/A'}</span>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <strong className="block mb-1">City:</strong>
            <span>{formData.city || 'N/A'}</span>
          </div>
          <div className="w-1/2">
            <strong className="block mb-1">State:</strong>
            <span>{formData.state || 'N/A'}</span>
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <strong className="block mb-1">ZIP Code:</strong>
            <span>{formData.zip || 'N/A'}</span>
          </div>
          <div className="w-1/2">
            <strong className="block mb-1">Country:</strong>
            <span>{formData.country || 'N/A'}</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        <div className="mb-4">
          <strong className="block mb-1">Card Number:</strong>
          <span>{formData.cardNumber || 'N/A'}</span>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <strong className="block mb-1">Expiry Date:</strong>
            <span>{formData.expiryDate || 'N/A'}</span>
          </div>
          <div className="w-1/2">
            <strong className="block mb-1">CVV:</strong>
            <span>{formData.cvv || 'N/A'}</span>
          </div>
        </div>
      </div>

      <Link to="/" className="bg-primary text-white py-2 px-4 rounded hover:bg-primary/70 transition duration-300">
        Continue Shopping
      </Link>
    </div>
  );
}