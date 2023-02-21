import { Home } from "."
import { render, screen, act } from "../../../test-utils"
import { server } from "../../mocks/server"

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

vi.mock('../../components/CoffeeCard', () => {
  return {
    CoffeeCard: ({ name }: { name: string }) => (
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

    render(<Home />);

    const cards = await screen.findAllByTestId('coffee-card')

    expect(cards).toHaveLength(2)
    expect(cards[0]).toHaveTextContent('Expresso Tradicional')
    expect(cards[1]).toHaveTextContent('Expresso Americano')
  })
})