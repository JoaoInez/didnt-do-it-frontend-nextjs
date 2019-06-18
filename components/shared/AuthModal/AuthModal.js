import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../../ui'
import Login from './Login'

const AuthModal = ({ open, closeModal }) => {
  return (
    <Modal open={open} closeModal={closeModal}>
      <Login closeModal={closeModal} />
    </Modal>
  )
}

AuthModal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default AuthModal
