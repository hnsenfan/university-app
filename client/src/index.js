import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import './modules/styles/core.scss'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename='/app'>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)