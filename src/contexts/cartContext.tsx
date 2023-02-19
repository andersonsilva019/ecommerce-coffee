import { createContext, useCallback, useReducer } from 'react'
import { CoffeeItemCartProps } from '../components/CoffeeItemCart'
import { CartActionTypes, cartReducer } from '../reducers/cartReducer/cartReducer'
import { stockService } from '../services/stock'

type CartContextProviderProps = {
  children: React.ReactNode
}

export type MapIdToAmountType = {
  [key: number]: number
}

export type CartContextType = {
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

export const cartContextDefaultValue: CartContextType = {
  cartItens: [],
  mapIdToAmount: {},
  totalInCart: 0,
  addToCart: () => null,
  incrementAmount: () => Promise.resolve(),
  isInCart: () => false,
  removeFromCart: () => null,
  decrementAmount: () => null,
  clearCart: () => null
}


export const CartContext = createContext(cartContextDefaultValue);

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

  const isInCart = useCallback((id: number) => {
    return cartItens.find(item => item.id === id) ? true : false;
  }, [cartItens])

  const addToCart = useCallback((coffee: CoffeeItemCartProps, amount: number) => {
    dispatch({
      type: CartActionTypes.ADD_TO_CART,
      payload: {
        coffee,
        amount
      }
    })
  },[])

  const removeFromCart = useCallback((id: number) => {
    dispatch({ type: CartActionTypes.REMOVE_FROM_CART, payload: { id } })
  }, [])

  const incrementAmount = useCallback(async (id: number) => {
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
  }, [mapIdToAmount])

  const decrementAmount = useCallback((id: number) => {
    if (mapIdToAmount[id] > 1) {
      dispatch({ type: CartActionTypes.DECREMENT_AMOUNT, payload: { id } })
    }
  },[mapIdToAmount])

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