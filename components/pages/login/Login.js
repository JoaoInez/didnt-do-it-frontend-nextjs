import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const LOG_IN = gql`
  mutation LOG_IN {
    logIn(data: { email: "third@gmail.com", password: "password" }) {
      ... on User {
        id
      }
      ... on LogInMessage {
        message
      }
    }
  }
`

const onSubmit = logIn => e => {
  e.preventDefault()
  logIn()
}

const Login = () => {
  return (
    <Mutation mutation={LOG_IN} onCompleted={data => console.log(data)}>
      {(logIn, { data, loading, error }) => (
        <form method="post" onSubmit={onSubmit(logIn)}>
          <input type="email" name="email" placeholder="Email address" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
      )}
    </Mutation>
  )
}

export default Login
