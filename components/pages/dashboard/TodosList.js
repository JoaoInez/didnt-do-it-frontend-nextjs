import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { P, Title } from '../../ui'
import CreateTodo from './CreateTodo'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Card = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 1px 1px 8px #454545;
  margin-top: -50px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  padding: 20px;
`

const Divider = styled.hr`
  border: 1px solid ${({ theme }) => theme.blue};
  width: 100px;
  margin-bottom: 20px;
`

const TodosList = ({ todos, userId }) => {
  return (
    <Wrapper>
      <Card>
        <Container>
          {todos.length > 0 ? (
            todos.map(({ id, task }) => <P key={id}>{task}</P>)
          ) : (
            <Title>Slacking off I see</Title>
          )}
        </Container>
        <Divider />
        <CreateTodo id={userId} />
      </Card>
    </Wrapper>
  )
}

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired
}

export default TodosList
