import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render the App', () => {
    const { container } = render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /Welcome!/i,
        level: 1
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /This is a boilerplate build with React 18, TypeScript, Jest, Testing Library, TailwindCSS 3, Vite, Eslint and Prettier./i
      )
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /start building for free/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(container.firstChild).toBeInTheDocument()
  })
})
