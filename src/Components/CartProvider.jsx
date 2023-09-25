import { useState, createContext } from "react";
import React from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    alert(cantidad);
  };

  const removeItem = (itemId) => {
    alert(item);
  };

  const clear = () => {
    setCart([]);
    alert(clear);
  };

  const isInCart = (id) => {
    true || false;
    cart.some((element) => element.id === id);
    alert(id);
  };

  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, addItem, removeItem, clear, isInCart }}
      >
        {children}
      </CartContext.Provider>

      <button onClick={addItem}>Mostrar cantidad</button>
      <button onClick={removeItem}>Remover</button>
      <button onClick={clear}>Limpiar</button>
      <button onClick={isInCart}>Esta en el carrito</button>
    </>
  );
};

export default CartProvider;
