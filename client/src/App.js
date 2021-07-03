import { Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import Header from './components/Header/Header'
import BottomBar from './components/BottomBar/BottomBar'
import LoginView from './routes/Login/LoginView'
import DashboardView from './routes/Dashboard/DashboardView'
import UniversitiesView from './routes/Universities/UniversitiesView'
import ProfileView from './routes/Profile/ProfileView'

const App = ({ location }) => {
  return (
    <Fragment>
      <Header />
      <Route exact path='/' component={LoginView} />
      <Route exact path='/home' component={DashboardView} />
      <Route exact path='/universities' component={UniversitiesView} />
      <Route exact path='/profile' component={ProfileView} />
      { location.pathname !== '/' && <BottomBar /> }
    </Fragment>
  )
}

App.propTypes = {
  location: PropTypes.object
}

export default withRouter(App)