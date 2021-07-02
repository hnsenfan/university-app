import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import DashboardView from './routes/Dashboard/DashboardView'
import BottomBar from './components/BottomBar/BottomBar'

const PrivateLayout = () => {
  return (
    <BrowserRouter basename='/app' forceRefresh={true}>
      <Header />
      <Route exact path='/' component={DashboardView} />
      <BottomBar />
    </BrowserRouter>
  )
}

export default PrivateLayout