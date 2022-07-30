import { useContextSelector } from 'use-context-selector'
import { CartContext } from "../contexts/cartContext";

export function useCart() {
  const addToCart = useContextSelector(CartContext, cart => cart.addToCart);
  const removeFromCart = useContextSelector(CartContext, cart => cart.removeFromCart);
  const incrementAmount = useContextSelector(CartContext, cart => cart.incrementAmount);
  const decrementAmount = useContextSelector(CartContext, cart => cart.decrementAmount);
  const clearCart = useContextSelector(CartContext, cart => cart.clearCart);
  const cartItens = useContextSelector(CartContext, cart => cart.cartItens);
  const mapIdToAmount = useContextSelector(CartContext, cart => cart.mapIdToAmount);
  const totalInCart = useContextSelector(CartContext, cart => cart.totalInCart);
  const isInCart = useContextSelector(CartContext, cart => cart.isInCart);

  return {
    addToCart,
    removeFromCart,
    incrementAmount,
    decrementAmount,
    clearCart,
    cartItens,
    mapIdToAmount,
    totalInCart,
    isInCart
  };
}