import React from 'react'
import styled from 'styled-components'
import { Title, Anchor, Button } from '../ui'

const Navbar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  z-index: 99;
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
        <Item>
          <Button bgColor="purple">Login</Button>
        </Item>
      </Half>
    </Inner>
  </Navbar>
)

export default Nav
