import styled from 'styled-components'
import { darken } from './utils'

const Pill = styled.button`
  border-radius: 100px;
  font-size: ${({ size }) =>
    size == 'lg'
      ? '1.5rem'
      : size == 'md'
        ? '1rem'
        : size == 'sm'
          ? '0.8rem'
          : '0rem'};
  background-color: ${({ theme, bgColor, dark }) =>
    dark ? darken(theme[bgColor], dark) : theme[bgColor]};
  color: ${({ theme, color }) => theme[color]};
  padding: ${({ size }) =>
    size == 'lg'
      ? '15px 30px'
      : size == 'md'
        ? '7.5px 15px'
        : size == 'sm'
          ? '5px 10px'
          : 0};
  box-shadow: 0 4px 2px ${({ theme }) => theme.grey};
  margin: ${({ margin }) => margin};
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    box-shadow: 0 4px 2px ${({ theme }) => darken(theme.grey, 10)};
  }
`

Pill.defaultProps = {
  bgColor: 'green',
  dark: 0,
  color: 'white',
  margin: 0,
  size: 'md'
}

const PillOutline = styled.button`
  border-radius: 100px;
  font-size: ${({ size }) =>
    size == 'lg'
      ? '1.5rem'
      : size == 'md'
        ? '1rem'
        : size == 'sm'
          ? '0.8rem'
          : '0rem'};
  background-color: ${({ theme }) => theme.white};
  border: 1px solid
    ${({ theme, color, dark }) =>
    dark ? darken(theme[color], dark) : theme[color]};
  color: ${({ theme, color, dark }) =>
    dark ? darken(theme[color], dark) : theme[color]};
  padding: ${({ size }) =>
    size == 'lg'
      ? '15px 30px'
      : size == 'md'
        ? '7.5px 15px'
        : size == 'sm'
          ? '5px 10px'
          : 0};
  margin: ${({ margin }) => margin};
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    box-shadow: 0 0 0 2px
      ${({ theme, color, dark }) =>
    dark ? darken(theme[color], dark) : theme[color]};
  }
`

PillOutline.defaultProps = {
  dark: 0,
  color: 'green',
  margin: 0,
  size: 'md'
}

const Anchor = styled.a`
  font-size: 0.8rem;
  color: ${({ theme, color }) => theme[color]};
  font-weight: ${({ weight }) => weight};

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme, underline }) => theme[underline]};
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`

Anchor.defaultProps = {
  color: 'accent',
  underline: 'black'
}

const Button = styled.button`
  border-radius: 4px;
  font-size: ${({ size }) =>
    size == 'lg'
      ? '1.5rem'
      : size == 'md'
        ? '1rem'
        : size == 'sm'
          ? '0.8rem'
          : '0rem'};
  background-color: ${({ theme, bgColor, dark }) =>
    dark ? darken(theme[bgColor], dark) : theme[bgColor]};
  color: ${({ theme, color }) => theme[color]};
  padding: ${({ size }) =>
    size == 'lg'
      ? '15px 30px'
      : size == 'md'
        ? '7.5px 15px'
        : size == 'sm'
          ? '5px 10px'
          : 0};
  box-shadow: 0 4px 2px ${({ theme }) => theme.grey};
  margin: ${({ margin }) => margin};
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    box-shadow: 0 4px 2px ${({ theme }) => darken(theme.grey, 10)};
  }
`

Button.defaultProps = {
  bgColor: 'green',
  dark: 0,
  color: 'white',
  margin: 0,
  size: 'md'
}

export { Pill, PillOutline, Anchor, Button }
