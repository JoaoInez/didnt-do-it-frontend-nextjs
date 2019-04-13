import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Title, Anchor } from '../ui'

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

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  padding: 20px 0;
`

const Inner = styled.div`
  width: 1000px;
  display: flex;
`

const Half = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${({ justify = 'initial' }) => justify};
`

const Logo = styled(Title)``

const Item = styled.div`
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Nav = () => (
  <Navbar>
    <Inner>
      <Half>
        <Logo>Didn't do it</Logo>
      </Half>
      <Half justify="flex-end">
        <Item>
          <Anchor underline="purple">About</Anchor>
        </Item>
        <Item>
          <Anchor weight="bold" underline="purple">
            About, but in bold
          </Anchor>
        </Item>
        <Query query={CURRENT_USER}>
          {({ data: { currentUser }, loading, error }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error</p>
            return !currentUser ? (
              <Item>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </Item>
            ) : null
          }}
        </Query>
      </Half>
    </Inner>
  </Navbar>
)

export default Nav
