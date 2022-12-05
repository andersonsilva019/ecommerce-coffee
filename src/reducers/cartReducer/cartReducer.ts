import { CoffeeItemCartProps } from "../../components/CoffeeItemCart"
import { MapIdToAmountType } from "../../contexts/cartContext"

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  INCREMENT_AMOUNT = "INCREMENT_AMOUNT",
  DECREMENT_AMOUNT = "DECREMENT_AMOUNT",
  CLEAR_CART = "CLEAR_CART",
}

type CartReducerAction = {
  type: CartActionTypes.ADD_TO_CART,
  payload: { coffee: CoffeeItemCartProps, amount: number }
} | {
  type: CartActionTypes.REMOVE_FROM_CART, payload: { id: number }
} | {
  type: CartActionTypes.INCREMENT_AMOUNT, payload: { id: number }
} | {
  type: CartActionTypes.DECREMENT_AMOUNT, payload: { id: number }
} | {
  type: CartActionTypes.CLEAR_CART
}

type CartReducerState = {
  cartItens: CoffeeItemCartProps[],
  mapIdToAmount: MapIdToAmountType
}

export function cartReducer(state: CartReducerState, action: CartReducerAction) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {

      const { coffee, amount } = action.payload

      return {
        ...state,
        cartItens: [...state.cartItens, action.payload.coffee],
        mapIdToAmount: { ...state.mapIdToAmount, [coffee.id]: amount }
      }
    }

    case CartActionTypes.REMOVE_FROM_CART: {
      const { id } = action.payload

      return {
        ...state,
        cartItens: state.cartItens.filter(coffee => coffee.id !== id),
        mapIdToAmount: { ...state.mapIdToAmount, [id]: 0 }
      }
    }

    case CartActionTypes.INCREMENT_AMOUNT: {
      const { id } = action.payload

      return {
        ...state,
        mapIdToAmount: { ...state.mapIdToAmount, [id]: state.mapIdToAmount[id] + 1 }
      }
    }

    case CartActionTypes.DECREMENT_AMOUNT: {
      const { id } = action.payload

      return {
        ...state,
        mapIdToAmount: { ...state.mapIdToAmount, [id]: state.mapIdToAmount[id] - 1 }
      }
    }

    case CartActionTypes.CLEAR_CART: {
      return {
        ...state,
        cartItens: [],
        mapIdToAmount: {}
      }
    }
  }
}