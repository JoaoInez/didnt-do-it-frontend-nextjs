import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import TodosList from './TodosList'
import { P, Title } from '../../ui'

const CURRENT_USER = gql`
  query CURRENT_USER {
    currentUser {
      id
      username
      todos {
        id
        task
        completed
      }
    }
  }
`

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.primary};
`

const Header = styled.div`
  background-color: ${({ theme }) => theme.blue};
  display: flex;
  justify-content: center;
  padding: 50px 0 100px 0;
`

const Dashboard = () => {
  return (
    <Query query={CURRENT_USER}>
      {({ data: { currentUser }, loading, error }) => (
        <Container>
          {loading ? (
            <P>Loading...</P>
          ) : error ? (
            <P>Error</P>
          ) : currentUser ? (
            <Header>
              <Title color="white">Hello {currentUser.username}</Title>
            </Header>
          ) : null}
          {loading ? (
            <P>Loading...</P>
          ) : error ? (
            <P>Error</P>
          ) : currentUser ? (
            <TodosList todos={currentUser.todos} userId={currentUser.id} />
          ) : null}
        </Container>
      )}
    </Query>
  )
}

export default Dashboard
export { CURRENT_USER }
