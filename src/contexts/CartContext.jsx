import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

export default function CartProvider({children}) {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const sum = cart.reduce((accumulator, item) => {
      return accumulator + (item.amount * item.price);
    }, 0);
    setTotal(sum);
  }, [cart]);

  useEffect(() => {
    if(cart) {
      const amount = cart.reduce((accumulator, item) => {
        return accumulator + item.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart])

  const addToCart = (product, id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    if(cartItem) {
      const newCart = cart.map(item => {
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
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !==id;
    })
    setCart(newCart);
  }
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id)
    addToCart(item, id);
  }
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    if(!cartItem){
      return;
    }
    let newCart;
    if(cartItem.amount <= 1){
      newCart = cart.filter(item => {
        return item.id !== id;
      });
    }else{
      newCart = cart.map(item => {
        if(item.id === id){
          return {...item, amount: cartItem.amount -1}
        } else {
          return item;
        }
      });
    }
    setCart(newCart);
  }
  const clearCart = () => {
    setCart([]);
  }
  return (
    <CartContext.Provider value={{addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total, cart}}>
      {children}
    </CartContext.Provider>
  );
}