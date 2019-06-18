import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Router from 'next/router'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Title, Button } from '../../ui'
import { CURRENT_USER } from '../../pages/index/Homepage'

const LOG_IN = gql`
  mutation LOG_IN($email: String!, $password: String!) {
    logIn(data: { email: $email, password: $password }) {
      ... on User {
        id
      }
      ... on LogInMessage {
        message
      }
    }
  }
`

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

const Login = ({ closeModal }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const { email, password } = credentials

  const handleSubmit = mutation => e => {
    e.preventDefault()
    mutation()
  }

  const handleChange = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value })
  }

  return (
    <Container>
      <Title>Login</Title>
      <Mutation
        mutation={LOG_IN}
        variables={credentials}
        refetchQueries={[{ query: CURRENT_USER }]}
        onCompleted={({ logIn }) => {
          if (logIn.message) {
            alert(logIn.message)
          } else if (logIn.id) {
            closeModal()
            Router.push('/dashboard')
          }
        }}
        onError={error => console.log(error)}
      >
        {(logIn, { loading, error }) => (
          <Form onSubmit={handleSubmit(logIn)} loading={loading}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              error={error}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              error={error}
            />
            <Anchor>Create an account instead</Anchor>
            <Button bgColor="purple" size="md">
              Log in
            </Button>
          </Form>
        )}
      </Mutation>
    </Container>
  )
}

Login.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default Login
