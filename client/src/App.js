import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import Header from './components/Header/Header'
import BottomBar from './components/BottomBar/BottomBar'
import LoginView from './routes/Login/LoginView'
import DashboardView from './routes/Dashboard/DashboardView'
import UniversitiesView from './routes/Universities/UniversitiesView'

const App = ({ location }) => {
  return (
    <React.Fragment>
      <Header />
      <Route exact path='/' component={LoginView} />
      <Route exact path='/home' component={DashboardView} />
      <Route exact path='/universities' component={UniversitiesView} />
      { location.pathname !== '/' && <BottomBar /> }
    </React.Fragment>
  )
}

App.propTypes = {
  location: PropTypes.object
}

export default withRouter(App)