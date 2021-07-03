import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { END_POINTS } from '../../api'
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert'
import Loading from '../../components/Loading/Loading'

import defaultProfPic from '../../assets/user.svg'
import './ProfileView.scss'

const ProfileView = () => {
  const [state, setState] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState()

  const handleChangeValue = (e) => {
    setState(prevState => ({ ...prevState, [e.target.id]: e.target.value }))
  }

  const handleUpdateProfile = useCallback(async() => {
    setIsFetching(true)
    const params = {
      full_name: state.full_name,
      nationality: state.nationality,
      residence: state.residence
    }
    await END_POINTS.patchUserProfile(params)
    .then(() => {
      setIsSuccess(true)
      setIsFetching(false)
      setTimeout(() => {
        setIsSuccess(false)
      }, 2000)
    }).catch(() => {
      setIsSuccess(false)
      setIsFetching(false)
      setIsError(true)
      setErrorMsg('Something went wrong. Please refresh and try again.')
    })
  })

  useEffect(async () => {
    const getUserProfile = async () => {
      await END_POINTS.getUserProfile()
      .then((result) => {
        setState(result.data)
        setIsFetching(false)
      }).catch(() => {
        setIsFetching(false)
        setIsError(true)
        setErrorMsg('Something went wrong. Please refresh and try again.')
      })
    }
    getUserProfile()
  }, [])
  return (
    <div className='page--whole'>
      {/* Section for Profile Picture */}
      <section className='container--sm'>
        <div className='d-flex justify-content-center bg-white radius-m profile-box'>
          <div className='profile-pic'>
            <img src={defaultProfPic} style={{ height: '65px' }} />
          </div>
          <div className='d-flex flex-column align-items-center'>
            <label className='text-medium text-black text-18 mv-s'>{state.username}</label>
            <span className='text-medium-grey'>{state.current_school}</span>
            <Link to='/'>
              <button className='mt-s btn-logout'>Logout</button>
            </Link>
          </div>
        </div>
      </section>
      { isError && <ErrorAlert errMessage={errorMsg} /> }
      {/* Section for Profile Details (email address is not editable) */}
      <section className='container--sm mt-s'>
        { isSuccess && <label className='text-green'>Successfully updated</label> }
        <div className='d-flex flex-column bg-white lh-m radius-m p-m mt-s '>
          <label className='text-medium mv-xs'>Full Name</label>
          <input type='text' id='full_name' onChange={handleChangeValue} value={state.full_name} />
          <label className='text-medium mv-xs'>Nationality</label>
          <input type='text' id='nationality' onChange={handleChangeValue} value={state.nationality} />
          <label className='text-medium mv-xs'>Country of Residence</label>
          <input type='text' id='residence' onChange={handleChangeValue} value={state.residence} />
          <label className='text-medium mv-xs'>Email Address</label>
          <input type='text' id='username' disabled value={state.username} />
        </div>
      </section>
      <section className='container--sm mt-l'>
        { isFetching
          ? <Loading />
          : <button className='btn-primary btn-block text-medium text-16' onClick={handleUpdateProfile}>Update Profile</button>
        }
      </section>
    </div>
  )
}
export default ProfileView