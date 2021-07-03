import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import { END_POINTS } from '../../api'
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert'
import Logo from '../../components/Icons/General/Logo'

import './LoginView.scss'

const LoginView = (props) => {
  const [data, setData] = useState({ userList: [] })
  const [state, setState] = useState({ username: '', password: '' })
  const [isError, setIsError] = useState(false)

  const handleChangeValue = (e) => {
    setState(prevState => ({ ...prevState, [e.target.id]: e.target.value }))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const userObject = data.userList.find(x => x.username === state.username)
    if (userObject && userObject.password === state.password) {
      props.history.push('/home')
    } else {
      setIsError(true)
    }
  }

  useEffect(async () => {
    const getUserList = async () => {
      const result = await END_POINTS.getUserList()
      setData({ userList: result.data })
    }
    getUserList()
  }, [])
  return (
    <div className='page--whole'>
      {/* Section for Login Details (username and password)  */}
      <form onSubmit={ handleLogin }>
        <section className='container--md'>
          <div className='d-flex flex-column align-items-center bg-white radius-m p-l lh-m'>
            <h1>Welcome to University App</h1>
            <div className='text-center'>
              <Logo />
              { isError && <ErrorAlert errMessage='The username and password you entered did not match our records. Please try again.' /> }
            </div>
            <div className='d-flex flex-column align-items-center'>
              <div className='d-flex flex-column mv-m login-box'>
                <label>Username</label>
                <input type='text' id='username' onChange={ handleChangeValue } />
              </div>
              <div className='d-flex flex-column login-box'>
                <label>Password</label>
                <input type='password' id='password' onChange={ handleChangeValue } />
              </div>
            </div>
          </div>
        </section>
        <section className='container--md mt-l'>
          <button className='btn-primary btn-block text-medium text-16' type='submit'>Login</button>
        </section>
      </form>
    </div>
  )
}

LoginView.propTypes = {
  history: PropTypes.object
}

export default withRouter(LoginView)