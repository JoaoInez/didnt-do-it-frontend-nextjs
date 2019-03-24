import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { mainTheme, darkTheme } from '../../styles/themes'

const Body = styled.main`
  background-color: ${({ theme }) => theme.primary};
`

const Page = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <Body>{children}</Body>
  </ThemeProvider>
)

Page.propTypes = {
  children: PropTypes.element.isRequired
}

export default Page
