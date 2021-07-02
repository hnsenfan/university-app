import { useCallback, useState } from 'react'

import SearchBar from '../../components/SearchBar/SearchBar'
import UniversityCard from './UniversityCard'

import './UniversitiesView.scss'
import { END_POINTS } from '../../api'

const randomDigit = Math.floor(Math.random() * 3) + 1

const OrdersView = () => {
  const [data, setData] = useState({ universityList: [] })
  const [value, setValue] = useState()

  const handleChangeValue = (e) => {
    setValue(prevState => ({ ...prevState, [e.target.id]: e.target.value }))
  }

  const handleSubmitSearch = useCallback(async() => {
    const params = {
      name: value.name,
      country: value.country
    }
    const result = await END_POINTS.getUniversityBySearchCat(params)
    setData({ universityList: result.data })
  })

  return (
    <div className='page--whole'>
      {/* Section for the Search Bar */}
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
      <section className='container--md mt-m'>
        { data.universityList.map((uni, index) =>
          <UniversityCard key={index} uniObject={uni} />
        )}
      </section>
    </div>
  )
}

export default OrdersView