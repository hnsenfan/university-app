import { NavLink } from 'react-router-dom'

import Dashboard from '../Icons/BottomBar/Dashboard'
import Universities from '../Icons/BottomBar/Universities'
import Profile from '../Icons/BottomBar/Profile'

import './BottomBar.scss'

const BottomBar = () => {
  return (
    <div className='bar'>
      <NavLink exact activeClassName="active" to="/home" className='item text-12'>
        <Dashboard />
        <label>Dashboard</label>
      </NavLink>
      <NavLink exact activeClassName="active" to="/universities" className='item text-12'>
        <Universities />
        <label>Universities</label>
      </NavLink>
      <NavLink exact activeClassName="active" to="/profile" className='item text-12'>
        <Profile />
        <label>Profile</label>
      </NavLink>
    </div>
  )
}

export default BottomBar