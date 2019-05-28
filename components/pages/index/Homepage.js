import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { P, Title, Heading, Pill, PillOutline } from '../../ui'
import AuthModal from '../../shared/AuthModal'

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

const Section = styled.div`
  background-color: ${({ theme, color = 'white' }) => theme[color]};
  height: ${({ height = 'initial' }) => height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${({ margin = 0 }) => margin};
  padding: ${({ padding = 0 }) => padding};
`

const MainSection = styled(Section)`
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  height: 70vh;
  margin-bottom: -16vh;
  position: relative;
  animation-name: main_section;
  animation-duration: 0.6s;
  animation-delay: 1.7s;
  animation-fill-mode: backwards;

  @keyframes main_section {
    from {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    }
  }
`

const Centered = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`

const MainHeading = styled(Heading)`
  font-size: 4rem;
  animation-name: heading;
  animation-duration: 0.6s;
  animation-delay: 0.4s;
  animation-fill-mode: backwards;

  @keyframes heading {
    from {
      transform: translateX(-75px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

const Slogan = styled(Title)`
  font-size: 1.4rem;
  animation-name: entrance;
  animation-duration: 0.5s;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;

  @keyframes entrance {
    from {
      transform: translateX(-100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

const GetStarted = styled(Pill)`
  animation-name: pill;
  animation-duration: 0.6s;
  animation-delay: 1.1s;
  animation-fill-mode: backwards;

  @keyframes pill {
    from {
      transform: translateY(10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const MaybeLater = styled(PillOutline)`
  animation-name: pill;
  animation-duration: 0.6s;
  animation-delay: 2.5s;
  animation-fill-mode: backwards;
`

const SectionTitle = styled(Title)`
  font-size: 1.8rem;
  animation-name: section_title;
  animation-duration: 0.6s;
  animation-delay: 1.7s;
  animation-fill-mode: backwards;

  @keyframes section_title {
    from {
      transform: translateY(-40px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const Grid = styled.div`
  margin: 50px 0;
  align-self: center;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
`

const Item = styled.div`
  display: flex;
  justify-content: ${({ justify = 'initial' }) => justify};
  align-items: center;
`

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.beige};
  padding: 20px 0;
  text-align: center;
`

const Homepage = () => {
  const [openAuth, setOpenAuth] = useState(false)

  const onOpen = () => {
    setOpenAuth(true)
  }

  const onClose = () => {
    setOpenAuth(false)
  }

  return (
    <>
      <AuthModal open={openAuth} closeModal={onClose} />
      <MainSection>
        <div>
          <Centered>
            <MainHeading weight="bold">Didn't do it</MainHeading>
          </Centered>
          <Centered>
            <Slogan>Because we all know you didn't</Slogan>
          </Centered>
          <Centered>
            <Query query={CURRENT_USER}>
              {({ data: { currentUser }, loading, error }) => {
                return loading || error || !currentUser ? (
                  <GetStarted
                    size="lg"
                    margin="0 10px"
                    bgColor="purple"
                    onClick={onOpen}
                  >
                    Get started
                  </GetStarted>
                ) : (
                  <Link href="/dashboard">
                    <a>
                      <GetStarted size="lg" margin="0 10px" bgColor="purple">
                        Dashboard
                      </GetStarted>
                    </a>
                  </Link>
                )
              }}
            </Query>
            <MaybeLater size="lg" margin="0 10px" color="grey" dark={20}>
              Maybe later
            </MaybeLater>
          </Centered>
        </div>
      </MainSection>
      <Section color="blue" padding="16vh 0 50px 0">
        <Centered>
          <SectionTitle color="white">
            When your to do later becomes to do never
          </SectionTitle>
        </Centered>
        <Grid>
          <Item justify="center">
            <Title color="white">Denial</Title>
          </Item>
          <Item>
            <P color="white">
              You didn't fail your objectives, you just didn't have the time to
              work on them. Week's pretty busy.
            </P>
          </Item>
          <Item justify="center">
            <Title color="white">Anger</Title>
          </Item>
          <Item>
            <P color="white">
              Damnit, if only Netflix hadn't released this show this week, you
              would have actually worked on your objectives. Screw you Netflix!
            </P>
          </Item>
          <Item justify="center">
            <Title color="white">Bargaining</Title>
          </Item>
          <Item>
            <P color="white">
              Ok, maybe if you work twice as hard next week, everyhting will be
              fine.
            </P>
          </Item>
          <Item justify="center">
            <Title color="white">Depression</Title>
          </Item>
          <Item>
            <P color="white">
              It's impossible, if you couldn't do it this, there's no way you
              can do twice as much next week.
            </P>
          </Item>
          <Item justify="center">
            <Title color="white">Acceptance</Title>
          </Item>
          <Item>
            <P color="white">
              You know what, it's ok. Life is about realizing you won't be
              getting anywhere, so might as well give up now.
            </P>
          </Item>
        </Grid>
      </Section>
      <Footer>
        <P>Made by someone who could have been playing video games</P>
      </Footer>
    </>
  )
}

export default Homepage
