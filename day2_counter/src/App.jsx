import { useState } from 'react'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(10)
  // let Counter = 15
  const addValue = () => {
    // console.log('sdsdsd', Counter);
    // Counter += 1
    if (Counter < 20) {
      setCounter(Counter + 1)
    } else {
      alert('Maximum Increment is 20')
    }

  }
  const removeValue = () => {
    // console.log('sdsdsd', Counter);
    // Counter += 1

    if (Counter > 0) {
      setCounter(Counter - 1)
    } else {
      alert('Minimum Decriment is 0')
    }
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {Counter}</h2>
      <button onClick={addValue}>Add Value {Counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {Counter}</button>
      <p>Footer: {Counter}</p>
    </>
  )
}

export default App
