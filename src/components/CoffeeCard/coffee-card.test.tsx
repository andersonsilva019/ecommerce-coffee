import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { CoffeeCard } from "."
import { render, screen, userEvent } from "../../../test-utils"
import { CartContext, cartContextDefaultValue, CartContextType } from "../../contexts/cartContext"
import { stockService } from '../../services/stock'

let user: UserEvent;

vi.mock('../../services/stock')

describe('CoffeeCard', () => {

  beforeEach(() => {
    user = userEvent.setup()
    vi.resetAllMocks()
  })

  it('should render correctly', () => {
    render(
      <CoffeeCard
        id={1}
        name="Expresso Tradicional"
        price={9.90}
        description="descrição"
        flavors={['Caramelo', 'Chocolate']}
        imgUrl="image"
        amount={1}
      />
    )

    expect(screen.getByText('Expresso Tradicional')).toBeTruthy()
    expect(screen.getByText('9,90').parentElement).toHaveTextContent('R$')
    expect(screen.getByText('9,90')).toBeTruthy()
    expect(screen.getByText('descrição')).toBeTruthy()
    expect(screen.getByText('Caramelo')).toBeTruthy()
    expect(screen.getByText('Chocolate')).toBeTruthy()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image')
    expect(screen.getByTestId('AddToCartButton')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Remover' })).not.toBeInTheDocument()
  })

  it('should render correctly when quantity is increased', async () => {

    stockService.verifyStock = vi.fn().mockResolvedValue({ amount: 2 })

    render(
      <CoffeeCard
        id={1}
        name="Expresso Tradicional"
        price={9.90}
        description="descrição"
        flavors={['Caramelo', 'Chocolate']}
        imgUrl="image"
        amount={1}
      />
    )

    const button = screen.getByText('+')

    expect(screen.getByText('1')).toBeTruthy()

    await user.click(button)

    expect(screen.getByText('2')).toBeTruthy()
  })

  it('should render correctly when quantity is decreased', async () => {

    stockService.verifyStock = vi.fn().mockResolvedValue({ amount: 2 })

    render(
      <CoffeeCard
        id={1}
        name="Expresso Tradicional"
        price={9.90}
        description="descrição"
        flavors={['Caramelo', 'Chocolate']}
        imgUrl="image"
        amount={1}
      />
    )

    const increaseButton = screen.getByText('+')

    const decreaseButton = screen.getByText('-')

    expect(screen.getByText('1')).toBeInTheDocument()

    await user.click(increaseButton)

    expect(screen.getByText('2')).toBeInTheDocument()

    await user.click(decreaseButton)

    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it("should emit an message error when don't have stock to add", async () => {

    stockService.verifyStock = vi.fn().mockResolvedValue({ amount: 2 })

    render(
      <CoffeeCard
        id={1}
        name="Expresso Tradicional"
        price={9.90}
        description="descrição"
        flavors={['Caramelo', 'Chocolate']}
        imgUrl="image"
        amount={1}
      />
    )

    const increaseButton = screen.getByText('+')

    const spy = vi.spyOn(window, 'alert').mockImplementationOnce(() => vi.fn())

    await user.click(increaseButton)

    await user.click(increaseButton)

    expect(spy).toHaveBeenCalledWith('Não temos mais este produto no estoque')
  })

  it('should emit an console error when stock service fails', async () => {

    stockService.verifyStock = vi.fn().mockRejectedValue({ message: 'error' })

    render(
      <CoffeeCard
        id={1}
        name="Expresso Tradicional"
        price={9.90}
        description="descrição"
        flavors={['Caramelo', 'Chocolate']}
        imgUrl="image"
        amount={1}
      />
    )

    const increaseButton = screen.getByText('+')

    await user.click(increaseButton)

    expect(stockService.verifyStock).toHaveBeenCalledWith(1)
  })

  it('should disabled decrease button when quantity is 1', async () => {
    render(
      <CoffeeCard
        id={1}
        name="Expresso Tradicional"
        price={9.90}
        description="descrição"
        flavors={['Caramelo', 'Chocolate']}
        imgUrl="image"
        amount={2}
      />
    )

    const decreaseButton = screen.getByText('-')

    expect(decreaseButton).not.toBeDisabled()

    await user.click(decreaseButton)

    expect(decreaseButton).toBeDisabled()
  })

  it('should show remove button when coffee is in cart', async () => {

    const cartContextValue = {
      ...cartContextDefaultValue,
      isInCart: () => true,
      removeFromCart: vi.fn()
    }

    render(
      <CartContext.Provider value={cartContextValue}>
        <CoffeeCard
          id={1}
          name="Expresso Tradicional"
          price={9.90}
          description="descrição"
          flavors={['Caramelo', 'Chocolate']}
          imgUrl="image"
          amount={2}
        />
      </CartContext.Provider>
    )

    const removeFromCartButton = screen.getByRole('button', { name: 'Remover' })

    expect(removeFromCartButton).toBeInTheDocument()

    await user.click(removeFromCartButton)

    expect(cartContextValue.removeFromCart).toHaveBeenCalledWith(1)
  })

  it('should call addToCart when coffee is not in cart', async () => {
    const cartContextValue: CartContextType = {
      ...cartContextDefaultValue,
      isInCart: () => false,
      addToCart: vi.fn()
    }

    render(
      <CartContext.Provider value={cartContextValue}>
        <CoffeeCard
          id={1}
          name="Expresso Tradicional"
          price={9.90}
          description="descrição"
          flavors={['Caramelo', 'Chocolate']}
          imgUrl="image"
          amount={2}
        />
      </CartContext.Provider>
    )

    const addToCartButton = screen.getByTestId('AddToCartButton')

    expect(addToCartButton).toBeInTheDocument()

    await user.click(addToCartButton)

    expect(cartContextValue.addToCart).toHaveBeenCalledTimes(1)
  })
})