import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
export default function Checkout() {
  const { cart, total } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process checkout here
    console.log('Checkout data:', formData);
  };

  return (
    <div className="container mx-auto p-8 pt-32">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="mb-8">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between border-b py-2">
            <span>{item.title}</span>
            <span>${parseFloat(item.price).toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between border-t py-2 font-semibold">
          <span>Total</span>
          <span>${parseFloat(total).toFixed(2)}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
        <p className="text-red-700 font-semibold mb-4">Please do not put real billing information here!</p>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-2 border" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            className="w-full p-2 border" 
            required 
          />
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block mb-2">City</label>
            <input 
              type="text" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              className="w-full p-2 border" 
              required 
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2">State</label>
            <input 
              type="text" 
              name="state" 
              value={formData.state} 
              onChange={handleChange} 
              className="w-full p-2 border" 
              required 
            />
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block mb-2">ZIP Code</label>
            <input 
              type="text" 
              name="zip" 
              value={formData.zip} 
              onChange={handleChange} 
              className="w-full p-2 border" 
              required 
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2">Country</label>
            <input 
              type="text" 
              name="country" 
              value={formData.country} 
              onChange={handleChange} 
              className="w-full p-2 border" 
              required 
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        <p className="text-red-700 font-semibold mb-4">Please do not put real credit card information here!</p>
        <div className="mb-4">
          <label className="block mb-2">Card Number</label>
          <input 
            type="text" 
            name="cardNumber" 
            value={formData.cardNumber} 
            onChange={handleChange} 
            className="w-full p-2 border" 
            required 
          />
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block mb-2">Expiry Date</label>
            <input 
              type="text" 
              name="expiryDate" 
              value={formData.expiryDate} 
              onChange={handleChange} 
              className="w-full p-2 border" 
              required 
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2">CVV</label>
            <input 
              type="text" 
              name="cvv" 
              value={formData.cvv} 
              onChange={handleChange} 
              className="w-full p-2 border" 
              required 
            />
          </div>
        </div>
        <button type="submit" className="bg-primary text-white py-2 px-4 rounded hover:bg-primary/70 transition duration-300">
          Place Order
        </button>
      </form>
    </div>
  );
}