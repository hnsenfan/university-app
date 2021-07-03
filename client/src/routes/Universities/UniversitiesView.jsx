import { useCallback, useState } from 'react'

import { END_POINTS } from '../../api'
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert'
import Loading from '../../components/Loading/Loading'
import SearchBar from '../../components/SearchBar/SearchBar'
import UniversityCard from './UniversityCard'

import './UniversitiesView.scss'

const randomDigit = Math.floor(Math.random() * 3) + 1

const OrdersView = () => {
  const [data, setData] = useState({ universityList: [] })
  const [value, setValue] = useState()
  const [isFetching, setIsFetching] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState()

  const handleChangeValue = (e) => {
    setValue(prevState => ({ ...prevState, [e.target.id]: e.target.value }))
  }

  const handleSubmitSearch = useCallback(async() => {
    setIsFetching(true)
    const params = {
      name: value.name,
      country: value.country
    }
    await END_POINTS.getUniversityBySearchCat(params)
    .then((result) => {
      setData({ universityList: result.data })
      setIsFetching(false)
    }).catch(() => {
      setIsFetching(false)
      setIsError(true)
      setErrorMsg('Something went wrong. Please refresh and try again.')
    })
  })

  return (
    <div className='page--whole'>
      <section className='container--md'>
        <div className={`d-flex flex-column radius-m ph-l pv-xxl univ-bg background-${randomDigit}`}> {/* Randomize between 3 background images each time the page refreshes */}
          <h1 className='search-title'>Find your dream university through our HUGE library across the world</h1>
          <SearchBar
            optionArray={['name', 'country']}
            handleChangeValue={handleChangeValue}
            handleSubmitSearch={handleSubmitSearch}
          />
        </div>
      </section>
      { isError && <ErrorAlert errMessage={errorMsg} /> }
      <section className='container--md mt-m'>
        { isFetching
          ? <Loading />
          : data.universityList.map((uni, index) =>
            <UniversityCard key={index} uniObject={uni} />
          )
        }
      </section>
    </div>
  )
}

export default OrdersView