import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Title, Anchor, Button } from '../ui'
import AuthModal from './AuthModal'

const CURRENT_USER = gql`
  query CURRENT_USER {
    currentUser {
      id
    }
  }
`

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  padding: 20px 0;
  border-top: 6px solid ${({ theme, color }) => theme[color]};
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
  margin-left: 10px;
`

const Nav = () => {
  const [openAuth, setOpenAuth] = useState(false)

  const onOpen = () => {
    setOpenAuth(true)
  }

  const onClose = () => {
    setOpenAuth(false)
  }

  return (
    <Query query={CURRENT_USER}>
      {({ data: { currentUser }, loading, error }) => (
        <Navbar color={!currentUser ? 'white' : 'purple'}>
          <AuthModal open={openAuth} closeModal={onClose} />
          <Inner>
            <Half>
              <Link href="/">
                <a>
                  <Logo>Didn't do it</Logo>
                </a>
              </Link>
            </Half>
            <Half justify="flex-end">
              <Item>
                <Link href="/about">
                  <Anchor underline="purple">About</Anchor>
                </Link>
              </Item>
              <Item>
                <Link href="/about">
                  <Anchor weight="bold" underline="purple">
                    About, but in bold
                  </Anchor>
                </Link>
              </Item>
              {loading || error || !currentUser ? (
                <Item>
                  <Button bgColor="purple" onClick={onOpen}>
                    <a>Login</a>
                  </Button>
                </Item>
              ) : (
                <Item>
                  <Link href="/dashboard">
                    <Button bgColor="purple">
                      <a>Dashboard</a>
                    </Button>
                  </Link>
                </Item>
              )}
            </Half>
          </Inner>
        </Navbar>
      )}
    </Query>
  )
}

export default Nav
