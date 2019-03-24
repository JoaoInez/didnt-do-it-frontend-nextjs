import styled from 'styled-components'

const P = styled.p`
  font-size: 1rem;
  color: ${({ theme, color }) => theme[color]};
  font-weight: ${({ weight }) => weight};
`

P.defaultProps = {
  color: 'accent',
  weight: 'normal'
}

const Title = styled.p`
  font-size: 1.5rem;
  color: ${({ theme, color }) => theme[color]};
  font-weight: ${({ weight }) => weight};
`

Title.defaultProps = {
  color: 'accent',
  weight: 'normal'
}

const Heading = styled.p`
  font-size: 2rem;
  color: ${({ theme, color }) => theme[color]};
  font-weight: ${({ weight }) => weight};
`

Heading.defaultProps = {
  color: 'accent',
  weight: 'normal'
}

export { P, Title, Heading }
