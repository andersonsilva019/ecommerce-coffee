import userEvent from '@testing-library/user-event'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { useContext } from 'react';
import { render, screen } from '../../test-utils'
import { CartContextProvider, CartContext, MapIdToAmountType } from './cartContext';

const newItemCart = { id: 1, name: 'Café', price: 10, imgUrl: 'image' }

vi.mock('../services/stock', () => {
  return {
    stockService: {
      verifyStock: vi.fn(() => Promise.resolve({ amount: 2 }))
    }
  }
})

let user: UserEvent;
let mapIdToAmountObj: MapIdToAmountType;

describe('CartContext', () => {

  beforeEach(() => {
    user = userEvent.setup()
    mapIdToAmountObj = {}
  })

  it('should be add to cart correctly', async () => {
    render(
      <CartContextProvider>
        <CartContext.Consumer>
          {valueOfContext => {

            const { cartItens, addToCart, mapIdToAmount } = valueOfContext

            mapIdToAmountObj = mapIdToAmount

            return (
              <div>
                <span>{cartItens.length}</span>
                <button
                  onClick={() => addToCart(newItemCart, 2)}
                >Add to Cart</button>
              </div>
            )
          }}
        </CartContext.Consumer>
      </CartContextProvider>
    )

    expect(screen.getByText('0')).toBeTruthy()

    await user.click(screen.getByRole('button', { name: 'Add to Cart' }))

    expect(screen.getByText('1')).toBeTruthy()

    expect(mapIdToAmountObj).toStrictEqual({ 1: 2 })
  })

  it('should be clean cart correctly', async () => {
    render(
      <CartContextProvider>
        <CartContext.Consumer>
          {valueOfContext => {

            const { cartItens, addToCart, mapIdToAmount, clearCart } = valueOfContext

            mapIdToAmountObj = mapIdToAmount

            return (
              <div>
                <span>{cartItens.length}</span>
                <button
                  onClick={() => addToCart(newItemCart, 2)}
                >Add to Cart</button>
                <button
                  onClick={clearCart}
                >Clear</button>
              </div>
            )
          }}
        </CartContext.Consumer>
      </CartContextProvider>
    )

    // Add to Cart
    await user.click(screen.getByRole('button', { name: 'Add to Cart' }))
    expect(screen.getByText('1')).toBeTruthy()
    expect(mapIdToAmountObj).toStrictEqual({ 1: 2 })

    // Clear Cart
    await user.click(screen.getByRole('button', { name: 'Clear' }))
    expect(screen.getByText('0')).toBeTruthy()
    expect(mapIdToAmountObj).toStrictEqual({})
  })

  it('should be remove from cart correctly', async () => {
    render(
      <CartContextProvider>
        <CartContext.Consumer>
          {valueOfContext => {

            const { cartItens, addToCart, mapIdToAmount, removeFromCart } = valueOfContext

            mapIdToAmountObj = mapIdToAmount

            return (
              <div>
                <span>{cartItens.length}</span>
                <button
                  onClick={() => addToCart(newItemCart, 2)}
                >Add to Cart</button>
                <button
                  onClick={() => removeFromCart(1)}
                >Remove</button>
              </div>
            )
          }}
        </CartContext.Consumer>
      </CartContextProvider>
    )

    await user.click(screen.getByRole('button', { name: 'Add to Cart' }))
    expect(screen.getByText('1')).toBeTruthy()
    expect(mapIdToAmountObj).toStrictEqual({ 1: 2 })

    await user.click(screen.getByRole('button', { name: 'Remove' }))
    expect(screen.getByText('0')).toBeTruthy()
    expect(mapIdToAmountObj).toStrictEqual({ 1: 0 })
  })

  it('should be increment amount correctly (with stock)', async () => {
    render(
      <CartContextProvider>
        <CartContext.Consumer>
          {valueOfContext => {

            const { addToCart, mapIdToAmount, incrementAmount } = valueOfContext

            mapIdToAmountObj = mapIdToAmount

            return (
              <div>
                <button
                  onClick={() => addToCart(newItemCart, 1)}
                >Add to Cart</button>
                <button
                  onClick={() => incrementAmount(1)}
                >Increment</button>
              </div>
            )
          }}
        </CartContext.Consumer>
      </CartContextProvider>
    )

    await user.click(screen.getByRole('button', { name: 'Add to Cart' }))
    expect(mapIdToAmountObj).toStrictEqual({ 1: 1 })

    await user.click(screen.getByRole('button', { name: 'Increment' }))
    expect(mapIdToAmountObj).toStrictEqual({ 1: 2 })
  })

  it('should not increment amount when product has not stock', async () => {
    render(
      <CartContextProvider>
        <CartContext.Consumer>
          {valueOfContext => {

            const { addToCart, mapIdToAmount, incrementAmount } = valueOfContext

            mapIdToAmountObj = mapIdToAmount

            return (
              <div>
                <button
                  onClick={() => addToCart(newItemCart, 1)}
                >Add to Cart</button>
                <button
                  onClick={() => incrementAmount(1)}
                >Increment</button>
              </div>
            )
          }}
        </CartContext.Consumer>
      </CartContextProvider>
    )

    await user.click(screen.getByRole('button', { name: 'Add to Cart' }))
    expect(mapIdToAmountObj).toStrictEqual({ 1: 1 })

    await user.click(screen.getByRole('button', { name: 'Increment' }))
    expect(mapIdToAmountObj).toStrictEqual({ 1: 2 })

    window.alert = vi.fn()

    await user.click(screen.getByRole('button', { name: 'Increment' }))
    expect(window.alert).toHaveBeenCalledWith('Não temos mais este produto no estoque')
  })

  it('should be decrement amount correctly', async () => {
    render(
      <CartContextProvider>
        <CartContext.Consumer>
          {valueOfContext => {

            const { addToCart, mapIdToAmount, decrementAmount } = valueOfContext

            mapIdToAmountObj = mapIdToAmount

            return (
              <div>
                <button
                  onClick={() => addToCart(newItemCart, 2)}
                >Add to Cart</button>
                <button
                  onClick={() => decrementAmount(1)}
                >Decrement</button>
              </div>
            )
          }}
        </CartContext.Consumer>
      </CartContextProvider>
    )

    await user.click(screen.getByRole('button', { name: 'Add to Cart' }))

    await user.click(screen.getByRole('button', { name: 'Decrement' }))
    expect(mapIdToAmountObj).toStrictEqual({ 1: 1 })
  })

  it('should not decrement when amount is greater than a one', async () => {
    render(
      <CartContextProvider>
        <CartContext.Consumer>
          {valueOfContext => {

            const { addToCart, mapIdToAmount, decrementAmount } = valueOfContext

            mapIdToAmountObj = mapIdToAmount

            return (
              <div>
                <button
                  onClick={() => addToCart(newItemCart, 2)}
                >Add to Cart</button>
                <button
                  onClick={() => decrementAmount(1)}
                >Decrement</button>
              </div>
            )
          }}
        </CartContext.Consumer>
      </CartContextProvider>
    )

    await user.click(screen.getByRole('button', { name: 'Add to Cart' }))

    await user.click(screen.getByRole('button', { name: 'Decrement' })) // 1
    await user.click(screen.getByRole('button', { name: 'Decrement' })) // 1
    expect(mapIdToAmountObj).toStrictEqual({ 1: 1 })
  })

  it('verify if an product is in Cart', async () => {

    const TestComponent = () => {
      const { isInCart, addToCart, removeFromCart } = useContext(CartContext)
      return (
        <div>
          {isInCart(1) && <span>Is in Cart</span>}
          <button
            onClick={() => addToCart(newItemCart, 1)}
          >Add to Cart</button>
          <button
            onClick={() => removeFromCart(1)}
          >Remove from Cart</button>
        </div>
      )
    }

    render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>
    )

    expect(screen.queryByText('Is in Cart')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Add to Cart' }))
    expect(screen.getByText('Is in Cart')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Remove from Cart' }))
    expect(screen.queryByText('Is in Cart')).not.toBeInTheDocument()
  })
})