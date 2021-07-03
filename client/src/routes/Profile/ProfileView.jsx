import { useCallback, useEffect, useState } from 'react'

import { END_POINTS } from '../../api'
import Loading from '../../components/Loading/Loading'

import defaultProfPic from '../../assets/user.svg'
import './ProfileView.scss'

const ProfileView = () => {
  const [state, setState] = useState([])
  const [isFetching, setIsFetching] = useState(false)

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
    setIsFetching(false)
  })

  useEffect(async () => {
    const getUserProfile = async () => {
      const result = await END_POINTS.getUserProfile()
      setState(result.data)
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
          </div>
        </div>
      </section>
      {/* Section for Profile Details (email address is not editable) */}
      <section className='container--sm mt-s'>
        <div className='d-flex flex-column bg-white lh-m radius-m p-m '>
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