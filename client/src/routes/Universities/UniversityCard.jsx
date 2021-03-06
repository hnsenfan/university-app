import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import { END_POINTS } from '../../api'

import ChevronRight from '../../components/Icons/General/ChevronRight'
import Star from '../../components/Icons/General/Star'

const UniversityCard = ({ uniObject = {}, isFavouriteProps }) => {
  const [isFavourite, setFavourite] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState()

  const handleAddFavourite = useCallback(async() => {
    await END_POINTS.patchFavouriteUniversities(uniObject)
    .then(() => {
      setFavourite(true)
    }).catch(() => {
      setIsError(true)
      setErrorMsg('Something went wrong. Please refresh and try again.')
    })
  })

  return (
    <div className='d-flex flex-column radius-m p-m bg-white mv-l'>
      <div className='d-flex justify-content-between'>
        <label className='text-15 text-medium'>{ uniObject.name }</label>
        <span className='text-medium-grey'>{ uniObject.alpha_two_code }</span>
      </div>
      <div className='d-flex align-items-center justify-content-between mt-s'>
        <label className='text-medium-grey'>{uniObject.country}</label>
        { isError && <label className='text-red'>{errorMsg}</label>}
        { isFavourite || isFavouriteProps
          ? <Star />
          : <button className='btn-primary fav-button' onClick={handleAddFavourite}>Add as Favourite</button>
        }
      </div>
      <hr className='divider' />
      <div className='d-flex flex-wrap-wrap'>
        { uniObject.web_pages && uniObject.web_pages.map((site, index) =>
          <a key={index} className='d-flex align-items-center site-box mt-xs' href={site} target='_blank' rel='noreferrer'>
            <div className='mr-s'>{ site }</div>
            <ChevronRight />
          </a>
        )}
      </div>
    </div>
  )
}

UniversityCard.propTypes = {
  isFavouriteProps: PropTypes.bool,
  uniObject: PropTypes.object,
}

export default UniversityCard