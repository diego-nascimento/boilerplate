import Main from '.'
import { render, screen } from '@testing-library/react'

describe('Main', () => {
  it('Should render', () => {
    render(<Main />)
    expect(screen.getByRole('heading', { name: /react avançado/i }))
  })

  it('Should match snapshop', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render the colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
