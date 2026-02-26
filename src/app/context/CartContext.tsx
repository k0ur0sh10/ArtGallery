import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  paintingId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (paintingId: string) => void;
  updateQuantity: (paintingId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  wishlist: string[];
  addToWishlist: (paintingId: string) => void;
  removeFromWishlist: (paintingId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.paintingId === item.paintingId);
      if (existing) {
        return prev.map((i) =>
          i.paintingId === item.paintingId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (paintingId: string) => {
    setItems((prev) => prev.filter((i) => i.paintingId !== paintingId));
  };

  const updateQuantity = (paintingId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(paintingId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.paintingId === paintingId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const addToWishlist = (paintingId: string) => {
    setWishlist((prev) => {
      if (prev.includes(paintingId)) return prev;
      return [...prev, paintingId];
    });
  };

  const removeFromWishlist = (paintingId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== paintingId));
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
