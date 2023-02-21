import { rest } from 'msw'
import { coffeesMock } from '../pages/Home/mock'

export const handlers = [
  rest.get('http://localhost:3333/coffees', (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json(coffeesMock)
    )
  }),
]