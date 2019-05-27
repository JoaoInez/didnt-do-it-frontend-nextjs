import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Modal, Title, Button } from '../../ui'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  ${Title} {
    margin-bottom: 30px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-bottom: 10px;
    font-size: 0.8rem;
  }
`

const Anchor = styled.a`
  font-size: 0.6rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.blue};
  text-align: center;
`

const AuthModal = ({ open, closeModal }) => {
  return (
    <Modal open={open} closeModal={closeModal}>
      <Container>
        <Title>Login</Title>
        <Form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Anchor>Create an account instead</Anchor>
          <Button bgColor="purple" size="md">
            Log in
          </Button>
        </Form>
      </Container>
    </Modal>
  )
}

AuthModal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default AuthModal
