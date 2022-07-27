import { createContext, useContext, useState } from 'react'
import { CoffeeItemCartProps } from '../components/CoffeeItemCart'
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
}

export const CartContext = createContext({} as CartContextType);

export const DELIVERY_FEE = 10;

export function CartContextProvider({ children }: CartContextProviderProps) {

  const [cartItens, setCartItens] = useState<CoffeeItemCartProps[]>([])
  const [mapIdToAmount, setMapIdToAmount] = useState<MapIdToAmountType>({})

  const totalInCart = cartItens.reduce((acc, item) => {
    return acc + (Number(item.price) * mapIdToAmount[item.id])
  }, 0);


  function isInCart(id: number) {
    return cartItens.find(item => item.id === id) ? true : false;
  }

  function addToCart(coffee: CoffeeItemCartProps, amount: number) {
    const newCartItem = {
      ...coffee,
      amount
    }

    setCartItens([...cartItens, newCartItem]);
    setMapIdToAmount({ ...mapIdToAmount, [coffee.id]: amount })
  }

  function removeFromCart(id: number) {
    const newCartItens = cartItens.filter(item => item.id !== id);
    setCartItens(newCartItens);
  }

  async function incrementAmount(id: number) {
    try {
      const newAmount = mapIdToAmount[id] + 1

      const data = await stockService.verifyStock(id);

      const amountInStock = data.amount;

      if (newAmount <= amountInStock) {
        setMapIdToAmount({ ...mapIdToAmount, [id]: newAmount })
      } else {
        alert('Não temos mais este produto no estoque')
      }

    } catch (error) {
      console.log(error)
    }
  }

  function decrementAmount(id: number) {
    if (mapIdToAmount[id] > 1) {
      setMapIdToAmount({ ...mapIdToAmount, [id]: mapIdToAmount[id] - 1 })
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
      decrementAmount
    }}>
      {children}
    </CartContext.Provider>
  )
}