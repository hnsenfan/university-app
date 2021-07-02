import { NavLink } from 'react-router-dom'
import Dashboard from '../Icons/BottomBar/Dashboard'
import Orders from '../Icons/BottomBar/Orders'
import Profile from '../Icons/BottomBar/Profile'

import './BottomBar.scss'

const BottomBar = () => {
  return (
    <div className='bar'>
      <NavLink exact activeClassName="active" to="/home" className='item text-12'>
        <Dashboard />
        <label>Dashboard</label>
      </NavLink>
      <NavLink exact activeClassName="active" to="/posts" className='item text-12'>
        <Orders />
        <label>Posts</label>
      </NavLink>
      <NavLink exact activeClassName="active" to="/more" className='item text-12'>
        <Profile />
        <label>Profile</label>
      </NavLink>
    </div>
  )
}

export default BottomBar