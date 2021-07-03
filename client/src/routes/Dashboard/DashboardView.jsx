import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { END_POINTS } from '../../api'

import UniversityCard from '../Universities/UniversityCard'
import NewsletterModal from '../../components/NewsletterModal/NewsletterModal'

import './DashboardView.scss'

const DashboardView = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [favUniversityList, setFavUniversityList] = useState([])

  const closeModal = () => {
    setIsShowModal(false)
  }

  useEffect(async () => {
    const getUserList = async () => {
      const result = await END_POINTS.getUserProfile()
      setIsShowModal(!result.data.subscribe_newsletter)
      setFavUniversityList(result.data.fav_universities)
    }
    getUserList()
  }, [])
  return (
    <div className='page--whole'>
      <section className='container--md'>
        <div className='d-flex justify-content-end radius-m pv-xl student-bg mv-l'>
          <div className='d-flex flex-column p-xl'>
            <h1 className='promotion-title'>Building A Better World One Student At A Time</h1>
            <p className='promotion-desc'>We have matched more than 100,000 students across the world with their dream universities. Find yours on our site now!</p>
            <Link to='/universities'>
              <button className='btn-primary btn-block'>GO</button>
            </Link>
          </div>
        </div>
      </section>
      { favUniversityList && favUniversityList.length > 0 &&
        <Fragment>
          <aside className='container--md mt-s'>
            <label className='text-medium text-medium-grey'>Your Favourite Universities</label>
          </aside>
          {/* Section for Order Details (customer and vendor) */}
          <section className='container--md mt-m'>
            { favUniversityList.map((uni, index) =>
              <UniversityCard key={index} uniObject={uni} isFavouriteProps />
            )}
          </section>
        </Fragment>
      }
      <NewsletterModal show={isShowModal} handleClose={closeModal} />
    </div>
  )
}

export default DashboardView