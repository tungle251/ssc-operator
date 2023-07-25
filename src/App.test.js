import { render } from '@testing-library/react'
import App from './App'

test('render App', () => {
  render(<App />)
  expect(true).toEqual(true)
})
