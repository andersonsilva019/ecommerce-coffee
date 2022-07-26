import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }

  return context;
}