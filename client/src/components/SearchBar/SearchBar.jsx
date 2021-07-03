import { Fragment } from 'react'
import PropTypes from 'prop-types'

import MiniSearch from '../Icons/General/MiniSearch'

import './SearchBar.scss'

const SearchBar = ({ optionArray, handleChangeValue, handleSubmitSearch }) => {
  return (
    <Fragment>
      <div className='d-flex flex-wrap-wrap justify-content-center'>
        { optionArray.map((option, index) =>
          <div key={index} className='d-flex flex-grow-1 mt-m mr-s'>
            <MiniSearch />
            <input type='search' id={option} placeholder={`Search by ${option}`} onChange={ handleChangeValue }/>
          </div>
        )}
      </div>
      <div className='d-flex justify-content-center mt-l'>
        <button className='btn-primary text-bold text-18' onClick={ handleSubmitSearch }>Search</button>
      </div>
    </Fragment>
  )
}

SearchBar.propTypes = {
  optionArray: PropTypes.array,
  handleChangeValue: PropTypes.func,
  handleSubmitSearch: PropTypes.func
}

export default SearchBar