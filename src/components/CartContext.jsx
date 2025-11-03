import React, { createContext, useContext, useEffect, useState } from "react";

const CART_KEY = "thriftZoneCart";

export const CartContext = createContext();

const getCartInitialState = () => {
  try {
    const cartStorage = localStorage.getItem(CART_KEY);
    return cartStorage ? JSON.parse(cartStorage) : [];
  } catch (error) {
    console.error("Failed to read cart from localStorage:", error);
    return [];
  }
};

export const CartProvider = ({ children }) => {


  const [cartState, setCartState] = useState(() => {
   
    if (typeof window === "undefined") return [];
    return getCartInitialState();
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cartState));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartState]);

  const addToCart = (product) => {
    alert('gret')
    setCartState((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
     
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
   
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeCartItem = (productId) => {
    setCartState((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartState([]);
  };

  const contextValues = {
    cartState,
    addToCart,
    removeCartItem,
    clearCart,
  };

  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);