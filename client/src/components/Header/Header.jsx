import { NavLink, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import './Header.scss'

const Header = ({ location }) => {
  return (
    <header className='bg-white shadow pv-l'>
      <div className='d-flex align-items-center ml-xl'>
        <div className='d-flex align-items-center flex-basis-50'>
          University App
        </div>
        { location.pathname !== '/' &&
          <div className='d-flex align-items-center justify-content-between flex-basis-50 header'>
            <NavLink exact activeClassName="active" to="/home" className='item'>
              <label className='text-bold text-18 pointer'>Dashboard</label>
            </NavLink>
            <NavLink exact activeClassName="active" to="/universities" className='item'>
              <label className='text-bold text-18 pointer'>Universities</label>
            </NavLink>
            <NavLink exact activeClassName="active" to="/more" className='item'>
              <label className='text-bold text-18 pointer'>Profile</label>
            </NavLink>
          </div>
        }
      </div>
    </header>
  )
}

Header.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  hasBack: PropTypes.bool,
  title: PropTypes.string
}

export default withRouter(Header)