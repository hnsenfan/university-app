import PropTypes from 'prop-types'

import Close from '../Icons/General/Close'

import './Modal.scss'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none"
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className='close-btn' onClick={handleClose}>
          <Close />
        </div>
        {children}
      </section>
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.array,
  handleClose: PropTypes.func
}

export default Modal