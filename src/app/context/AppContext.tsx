import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Painting } from '../types';

interface AppContextType {
  cart: CartItem[];
  addToCart: (painting: Painting, quantity?: number) => void;
  removeFromCart: (paintingId: string) => void;
  updateQuantity: (paintingId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  wishlist: string[];
  toggleWishlist: (paintingId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const addToCart = (painting: Painting, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.painting.id === painting.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.painting.id === painting.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { painting, quantity }];
    });
  };

  const removeFromCart = (paintingId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.painting.id !== paintingId));
  };

  const updateQuantity = (paintingId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(paintingId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.painting.id === paintingId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.painting.price * item.quantity, 0);
  };

  const toggleWishlist = (paintingId: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(paintingId)
        ? prevWishlist.filter((id) => id !== paintingId)
        : [...prevWishlist, paintingId]
    );
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        wishlist,
        toggleWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
