import { PropTypes } from 'prop-types'

import Error from '../Icons/General/Error'

import './ErrorAlert.scss'

const ErrorAlert = (props) => {
  return(
    <div className='container--sm alert-box mt-m'>
      <div className='d-flex align-items-center'>
        <Error />
        <label className='text-15'>{props.errMessage}</label>
      </div>
    </div>
  )
}

ErrorAlert.propTypes = {
  errMessage: PropTypes.string
}

export default ErrorAlert