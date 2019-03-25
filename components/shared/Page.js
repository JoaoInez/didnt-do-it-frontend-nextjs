import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../styles/themes'
import Nav from './Nav'

const Body = styled.main`
  background-color: ${({ theme }) => theme.beige};
  min-height: 100vh;
`

const Page = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <>
      <Nav />
      <Body>{children}</Body>
    </>
  </ThemeProvider>
)

Page.propTypes = {
  children: PropTypes.element.isRequired
}

export default Page
