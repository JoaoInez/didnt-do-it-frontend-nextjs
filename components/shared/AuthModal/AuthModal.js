import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../../ui'

const AuthModal = ({ open, closeModal }) => {
  return (
    <Modal open={open} closeModal={closeModal}>
      <p>test</p>
    </Modal>
  )
}

AuthModal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default AuthModal
