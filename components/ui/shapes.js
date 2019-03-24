import styled from 'styled-components'

const Shape = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  margin-top: ${({ size }) => `-${size / 2}px`};
  left: ${({ left }) => left};
  margin-left: ${({ size }) => `-${size / 2}px`};
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  background-color: ${({ theme, color }) => theme[color]};
  clip-path: ${({ clip }) => clip};
  z-index: -1;
`

Shape.defaultProps = {
  color: 'beige',
  clip: 'none',
  size: 25,
  top: '50%',
  left: '50%'
}

export { Shape }
