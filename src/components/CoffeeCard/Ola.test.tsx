import { describe, expect, it } from 'vitest'
import { render, screen } from '../../../test-utils'


describe('JSON', () => {

  it('render', () => {
    render(
      <h1>Ola</h1>
    )

    expect(screen.getByText(/ola/i)).toBeInTheDocument()
  })
})
