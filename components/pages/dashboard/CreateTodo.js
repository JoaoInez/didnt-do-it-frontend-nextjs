import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { CURRENT_USER } from './Dashboard'

const CREATE_TODO = gql`
  mutation CREATE_TODO($task: String!, $id: ID!) {
    createTodo(data: { task: $task, id: $id }) {
      ... on Todo {
        id
      }
      ... on CreateTodoMessage {
        message
      }
    }
  }
`

const Form = styled.form`
  display: flex;
`

const Input = styled.input`
  font-size: 1rem;
  border-radius: 0 0 0 4px;
  flex: 5;
  z-index: 2;
`

const Button = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.white};
  border-radius: 0 0 4px 0;
`

const CreateTodo = ({ id }) => {
  const [task, setTask] = useState('')

  const handleSubmit = mutation => e => {
    e.preventDefault()
    setTask('')
    mutation()
  }

  const handleChange = ({ target: { value } }) => {
    setTask(value)
  }
  return (
    <Mutation
      mutation={CREATE_TODO}
      variables={{ task, id }}
      refetchQueries={[{ query: CURRENT_USER }]}
      onCompleted={({ createTodo }) => {
        if (createTodo.message) {
          alert(createTodo.message)
        }
      }}
    >
      {(createdTodo, { loading }) => (
        <Form onSubmit={handleSubmit(createdTodo)}>
          <Input
            type="text"
            placeholder="Do something..."
            value={task}
            onChange={handleChange}
          />
          <Button type="submit" disabled={loading}>
            +
          </Button>
        </Form>
      )}
    </Mutation>
  )
}

CreateTodo.propTypes = {
  id: PropTypes.string.isRequired
}

export default CreateTodo
