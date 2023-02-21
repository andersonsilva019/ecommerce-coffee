import { Home } from "."
import { render, screen, waitFor, act } from "../../../test-utils"
import { coffeeService } from '../../services/coffees'
import { coffeesMock } from "./mock"

vi.mock('../../services/coffees')

vi.mock('../../components/CoffeeCard', () => {
  return {
    CoffeeCard: ({ id, name }: { id: number, name: string }) => (
      <div data-testid="coffee-card" >
        <span>{name}</span>
      </div>
    )
  }
})

describe('Home', () => {
  it('should render correctly', async () => {
    render(
      <Home />
    )

    expect(screen.getByText('Encontre o café perfeito para qualquer hora do dia')).toBeInTheDocument()
    expect(screen.getByText('Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora')).toBeInTheDocument()
    expect(screen.getByText('Nossos cafés')).toBeInTheDocument()
  })

  it('should render coffee cards', async () => {

    coffeeService.getCoffees = vi.fn().mockResolvedValue(coffeesMock)

    act(() => {
      const { debug } = render(<Home />);
    })

    //const cards = await waitFor(() => screen.getAllByTestId('coffee-card'))


    const cards = await screen.findAllByTestId('coffee-card')

    expect(cards).toHaveLength(2)
    expect(cards[0]).toHaveTextContent('Expresso Tradicional')
    expect(cards[1]).toHaveTextContent('Expresso Americano')

    expect(coffeeService.getCoffees).toHaveBeenCalledTimes(1)
  })
})