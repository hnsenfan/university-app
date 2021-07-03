import { useCallback } from 'react'
import PropTypes from 'prop-types'

import { END_POINTS } from '../../api'
import Modal from "../Modal/Modal"

const NewsletterModal = ({ show, handleClose }) => {
  const handleSubmitSubscription = useCallback(async() => {
    // When this function is triggered, a TRUE value is always expected as a new flag to subscribe_newsletter key
    await END_POINTS.patchNewsletterSubscription(true)
    handleClose()
  })
  return (
    <Modal show={show} handleClose={handleClose}>
      <h1>Join our mailing list!</h1>
      <p>We really want you to want us. Sign up to receive email updates on new features, university, specials, and more</p>
      <button className='btn-primary' onClick={handleSubmitSubscription}>
        Yes, subscribe me to this list
      </button>
      <p>You won&apos;t be subscribed if you don&apos;t click the confirmation button above.</p>
    </Modal>
  )
}

NewsletterModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func
}

export default NewsletterModal