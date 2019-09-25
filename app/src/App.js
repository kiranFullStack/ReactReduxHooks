import React from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Redux Hooks</h1>
      <hr />
      {counter}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  )
}

export default App
