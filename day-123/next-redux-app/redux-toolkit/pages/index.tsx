import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment, incrementByCount, decrement, valueSelector} from "../features/counter/counterSlice"


export function Todo(props) {
  const { todo } = props;

  return (
    <pre>
      <code>{JSON.stringify(todo, null, 2)}</code>
    </pre>
  )
}

function getTodos(state) {
  return state.todos.ids
}

export default function Home() {

  const todos = useSelector(getTodos)

  let value = useSelector(valueSelector)

  let dispatch = useDispatch()


  function handleIncrement() {
    dispatch({ type: "counter/increment" })
  }

  function handleDecremeny() {
    dispatch({ type: "counter/decrement" })
  }

  function handleIf() {

  }

  function handleAsync() {

  }

  function handleTodosAsync() {
    dispatch(fetchTodos())
  }

  return (
    <>
      <p>
        Clicked: <span id="value">{value}</span> times
        <button id="increment" onClick={handleIncrement}>+</button>
        <button id="decrement" onClick={handleDecremeny}>-</button>
        <button id="incrementIfOdd" onClick={handleIf}>Increment if odd</button>
        <button id="incrementAsync" onClick={handleAsync}>Increment async</button>
        <button id="incrementAsync" onClick={handleTodosAsync}>Todos async</button>
      </p>
      {
        todos.map(todo => {
          return <Todo key={todo.id} todo={todo} />
        })
      }
    </>
  )
}

