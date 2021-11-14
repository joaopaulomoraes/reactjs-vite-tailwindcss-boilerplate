import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'
import App from './App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
