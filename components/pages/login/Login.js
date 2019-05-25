import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

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

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const onSubmit = logIn => e => {
    e.preventDefault()
    logIn()
  }

  const onChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value })
  }

  const { email, password } = state

  return (
    <Mutation
      mutation={LOG_IN}
      variables={state}
      onCompleted={data => console.log(data)}
      onError={error => console.log(error)}
    >
      {(logIn, { loading, error }) => (
        <form method="post" onSubmit={onSubmit(logIn)}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={onChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            value={password}
          />
          <button type="submit" disabled={loading}>
            Log In
          </button>
          {error && <p>{error.toString()}</p>}
        </form>
      )}
    </Mutation>
  )
}

export default Login
