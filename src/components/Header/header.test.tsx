import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup"
import { Header } from "."
import { render, screen, userEvent } from "../../../test-utils"
import { CartContext, cartContextDefaultValue, CartContextType } from "../../contexts/cartContext"


vi.mock('react-router-dom', () => {
  return {
    Link: ({ children, to }: { children: React.ReactNode, to: string }) => <a href={to}>{children}</a>
  }
})

describe('Header', () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup()
  })

  it('should not render badge when cartItens is empty', async () => {

    const cartContextValue: CartContextType = {
      ...cartContextDefaultValue,
      cartItens: []
    }

    render(
      <CartContext.Provider value={cartContextValue}>
        <Header />
      </CartContext.Provider>
    )

    expect(screen.queryByTestId('totalInCart')).not.toBeInTheDocument()
  })

  it('should render badge when cartItens has itens', async () => {
    const cartContextValue: CartContextType = {
      ...cartContextDefaultValue,
      cartItens: [{
        id: 1,
        name: 'Expresso Tradicional',
        price: 9.90,
        imgUrl: 'image',
      }]
    }

    render(
      <CartContext.Provider value={cartContextValue}>
        <Header />
      </CartContext.Provider>
    )

    expect(screen.getByTestId('totalInCart')).toHaveTextContent('1')
  })

  it('should navigate to checkout page when user click ShoppingCart icon', async () => {

    const cartContextValue: CartContextType = {
      ...cartContextDefaultValue,
      cartItens: [{
        id: 1,
        name: 'Expresso Tradicional',
        price: 9.90,
        imgUrl: 'image',
      }]
    }

    render(
      <CartContext.Provider value={cartContextValue}>
        <Header />
      </CartContext.Provider>
    )

    const cartContainer = screen.getByTestId('totalInCart').parentElement
    const link = cartContainer?.parentElement

    expect(link).toHaveAttribute('href', '/checkout')
  })

  it('should navigate to home page when user click logo', async () => {
      
      const cartContextValue: CartContextType = {
        ...cartContextDefaultValue,
        cartItens: [{
          id: 1,
          name: 'Expresso Tradicional',
          price: 9.90,
          imgUrl: 'image',
        }]
      }
  
      render(
        <CartContext.Provider value={cartContextValue}>
          <Header />
        </CartContext.Provider>
      )
  
      const logo = screen.getByAltText('logo')
  
      expect(logo.parentElement).toHaveAttribute('href', '/')
  })
})