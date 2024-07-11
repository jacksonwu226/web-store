import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

export default function CartProvider({children}) {
  const [cart, setCart] = useState([]);
  const addToCart = (product, id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    if(cartItem) {
      const newCart = [...cart].map(item => {
        if(item.id === id){
          return{...item, amount: cartItem.amount+1};
        } else{
          return item;
        }
      })
      setCart(newCart);
    }else{
      const newItem = {...product, amount: 1};
      setCart([...cart, newItem])
    }
  }
  return (
    <CartContext.Provider value={{addToCart, cart}}>
      {children}
    </CartContext.Provider>
  );
}