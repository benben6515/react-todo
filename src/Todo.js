import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import TodoItem from './TodoItem.js'
import { Button, Wrap } from './style/GlobalStyle'

import styled from 'styled-components'

const ButtonFilter = styled(Button)`
  width: 8rem;
  margin-top: 1rem;
`
const WrapTodo = styled(Wrap)`
  height: auto;
  padding: 1rem;
  margin-bottom: 10rem;
  border-radius: .6rem;
  border: 1px solid #eee;
  box-shadow: .3rem .4rem .5rem .5rem rgba(0,0,0,0.1);
`

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), content: "寫扣", isDone: false },
    { id: uuidv4(), content: "吃飯", isDone: true },
  ])
  const [value, setValue] = useState("")
  const [filter, setFilter] = useState("All")
  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState(null)

  const FILTER_MAP = {
    "All": todo => todo,
    "Done": todo => todo.isDone,
    "UnDone": todo => !todo.isDone
  }

  const inputChange = (e) => {
    setValue(e.target.value)
  }

  const todosHandler = () => {
    let val = value.trim()
    if (val === "" || val.length > 30) return setValue("")
    if (editId) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === editId) {
            return {
              ...todo,
              content: val
            }
          }
          return todo
        })
      )
      setIsEdit(false)
      setEditId(null)
    } else {
      setTodos([
        {
          id: uuidv4(),
          content: val,
          isDone: false,
        },
        ...todos,
      ])
    }
    setValue("")
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const isDoneToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          isDone: !todo.isDone,
        }
      })
    )
  }

  const editTodoHandler = (id) => {
    let newTodo = todos.find((e) => e.id === id)
    setIsEdit(true)
    setValue(newTodo.content)
    setEditId(id)
  }

  const filterAll = () => {
    setFilter("All")
  }

  const filterDone = () => {
    setFilter("Done")
  }

  const filterUndone = () => {
    setFilter("UnDone")
  }


  const todoList = todos
  .filter(FILTER_MAP[filter])
  .map((todo) => (
    <TodoItem
      key={todo.id}
      content={todo.content}
      todo={todo}
      isDoneToggle={isDoneToggle}
      deleteTodoHandler={deleteTodoHandler}
      editTodoHandler={editTodoHandler}
    />
  ))

  return (
    <WrapTodo>
      <input
        type="text"
        placeholder="輸入吐嘟..."
        onChange={inputChange}
        value={value}
      ></input>
      {isEdit ? (
        <Button backgroundColor="#aff" onClick={todosHandler}>
          更新
        </Button>
      ) : (
        <Button onClick={todosHandler}>提交</Button>
      )}
      <div>
        <ButtonFilter onClick={filterAll}>全部</ButtonFilter>
        <ButtonFilter backgroundColor="#dff" onClick={filterDone}>已完成</ButtonFilter>
        <ButtonFilter backgroundColor="#fdd" onClick={filterUndone}>未完成</ButtonFilter>
      </div>
      <hr></hr>
      {todoList}
    </WrapTodo>
  )
}

export default Todo
