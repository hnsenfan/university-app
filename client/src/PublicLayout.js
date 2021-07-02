import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import LoginView from './routes/Login/LoginView'

const PublicLayout = () => {
  return (
    <BrowserRouter basename='/'>
      <Header />
      <Route exact path='/' component={LoginView} />
    </BrowserRouter>
  )
}

export default PublicLayout