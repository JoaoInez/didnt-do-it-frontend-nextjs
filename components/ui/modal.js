import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  animation-name: ${({ open, close }) =>
    open && !close ? 'open_modal' : open && close ? 'close_modal' : 'none'};
  animation-duration: 0.2s;
  animation-fill-mode: backwards;

  @keyframes open_modal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes close_modal {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

const ModalContent = styled.div`
  background-color: white;
  margin-bottom: 20%;
  padding: 40px 20px 20px 20px;
  width: ${({ size = 'sm' }) => (size ? '300px' : size == 'md' ? '1000px' : 0)};
  border-radius: 4px;
  box-shadow: 1px 1px 8px black;
  position: relative;
  z-index: 2;
  animation-name: ${({ open, close }) =>
    open && !close ? 'open_modal' : open && close ? 'close_modal' : 'none'};
  animation-duration: 0.2s;
  animation-fill-mode: backwards;

  @keyframes open_modal {
    from {
      margin-bottom: 40%;
      opacity: 0;
    }
    to {
      margin-bottom: 20%;
      opacity: 1;
    }
  }

  @keyframes close_modal {
    from {
      margin-bottom: 20%;
      opacity: 1;
    }
    to {
      margin-bottom: 40%;
      opacity: 0;
    }
  }
`

const ModalEmpty = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.4rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.grey};
  }
`

export const Modal = ({ children, size = 'sm', open = false, closeModal }) => {
  const [closeAnim, setCloseAnim] = useState(false)

  const onClose = () => {
    setCloseAnim(true)
    setTimeout(() => {
      closeModal()
      setCloseAnim(false)
    }, 200)
  }

  return (
    <ModalWrapper open={open} close={closeAnim}>
      <ModalEmpty onClick={onClose} />
      <ModalContent size={size} open={open} close={closeAnim}>
        <Close onClick={onClose}>&times;</Close>
        {children}
      </ModalContent>
    </ModalWrapper>
  )
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  open: PropTypes.bool,
  closeModal: PropTypes.func.isRequired
}
