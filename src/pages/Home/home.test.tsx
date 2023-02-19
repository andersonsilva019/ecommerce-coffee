import { Home } from "."
import { render, screen, waitFor, act } from "../../../test-utils"
import { coffeeService } from '../../services/coffees'
import { coffeesMock } from "./mock"

vi.mock('../../services/coffees')

vi.mock('../../components/CoffeeCard', () => {
  return {
    CoffeeCard: ({ id }: { id: number }) => <div data-testid="coffee-card" >{id}</div>
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
      render(<Home />);
    }) 

    const cards = await waitFor(() => screen.getAllByTestId('coffee-card'))

    expect(cards).toHaveLength(2)
    expect(cards[0]).toHaveTextContent('1')
    expect(cards[1]).toHaveTextContent('2')

    expect(coffeeService.getCoffees).toHaveBeenCalledTimes(1)
  })
})