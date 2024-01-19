import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

//  let counter = 5

  const addValue = () => {
    
    counter = counter + 1;
    setCounter(counter)

    // below code is written so that counter value does not exceed 20
    if (counter >= 20) {
      setCounter(20)
    }
    //setCounter(counter)
    
  
  }

  const removeValue = () => {
    //counter = counter - 1;
    setCounter(counter - 1)
    if (counter <= 0) {
      setCounter(0)
    }
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add Value</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value</button>
    </>
  )
}

export default App
