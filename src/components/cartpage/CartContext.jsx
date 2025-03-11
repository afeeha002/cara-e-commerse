import React, { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // ✅ Load cart from local storage on first render
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [secArray ,setSecArray]= useState([]);
  const [selectedOption, setSelectedOption]= useState(null);
  // ✅ Save cart to local storage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add item to cart (or increase quantity if it exists)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Toggle item in cart (Add/Remove)
  const toggleCartItem = (product) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === product.id);
      return isItemInCart
        ? prevCart.filter((item) => item.id !== product.id)
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  
  const updateCartQuantity = (productId, newQuantity) => {
    newQuantity = Math.max(Number(newQuantity), 1); // Ensure quantity is at least 1
  
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  
    console.log("Updated Cart:", cart); // ✅ Log to check updates
  };
  
  // ✅ Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{
      // cart: array,
       addToCart, cart ,removeFromCart, toggleCartItem, updateCartQuantity,
      cart1: secArray, setCart1: setSecArray, 
      selectedOption, setSelectedOption 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
