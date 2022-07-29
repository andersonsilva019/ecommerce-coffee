import { createContext, useReducer } from 'react'
import { CoffeeItemCartProps } from '../components/CoffeeItemCart'
import { CartActionTypes, cartReducer } from '../reducers/cartReducer/cartReducer'
import { stockService } from '../services/stock'

type CartContextProviderProps = {
  children: React.ReactNode
}

export type MapIdToAmountType = {
  [key: string]: number
}

type CartContextType = {
  cartItens: CoffeeItemCartProps[]
  mapIdToAmount: MapIdToAmountType
  totalInCart: number
  addToCart: (coffee: CoffeeItemCartProps, amount: number) => void
  incrementAmount: (id: number) => Promise<void>
  isInCart: (id: number) => boolean
  removeFromCart: (id: number) => void
  decrementAmount: (id: number) => void
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextType);

export const DELIVERY_FEE = 10;

export function CartContextProvider({ children }: CartContextProviderProps) {

  const [state, dispatch] = useReducer(cartReducer, {
    cartItens: [],
    mapIdToAmount: {}
  });


  const { cartItens, mapIdToAmount } = state

  const totalInCart = cartItens.reduce((acc, item) => {
    return acc + (Number(item.price) * mapIdToAmount[item.id])
  }, 0);

  function clearCart() {
    dispatch({ type: CartActionTypes.CLEAR_CART })
  }

  function isInCart(id: number) {
    return cartItens.find(item => item.id === id) ? true : false;
  }

  function addToCart(coffee: CoffeeItemCartProps, amount: number) {
    dispatch({
      type: CartActionTypes.ADD_TO_CART,
      payload: {
        coffee,
        amount
      }
    })
  }

  function removeFromCart(id: number) {
    dispatch({ type: CartActionTypes.REMOVE_FROM_CART, payload: { id } })
  }

  async function incrementAmount(id: number) {
    try {
      const newAmount = mapIdToAmount[id] + 1

      const data = await stockService.verifyStock(id);

      const amountInStock = data.amount;

      if (newAmount <= amountInStock) {
        dispatch({ type: CartActionTypes.INCREMENT_AMOUNT, payload: { id } })
      } else {
        alert('Não temos mais este produto no estoque')
      }

    } catch (error) {
      console.log(error)
    }
  }

  function decrementAmount(id: number) {
    if (mapIdToAmount[id] > 1) {
      dispatch({ type: CartActionTypes.DECREMENT_AMOUNT, payload: { id } })
    }
  }

  return (
    <CartContext.Provider value={{
      addToCart,
      cartItens,
      mapIdToAmount,
      incrementAmount,
      isInCart,
      removeFromCart,
      totalInCart,
      decrementAmount,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}