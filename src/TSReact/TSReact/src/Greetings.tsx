import { useState } from 'react'

// Component Typing

type GreetingType = {
  name: string
  age?: number
}

export default function GreetingComponent({ name, age }: GreetingType) {
  return (
    <div>
      <p>Hello {name}!</p>
      {age !== undefined && <p>You are {age} years old </p>}
    </div>
  )
}

// Common Patterns
// Type-Safe Events
// Type event handlers for input and buttons

// Input change
const NameInput = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  return <input onChange={handleChange} />
}
console.log(NameInput)

// Button click
const SaveButton = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }
  return <button onClick={handleClick}>Save</button>
}
console.log(SaveButton)

// Typing state with useState
const useStateHook = () => {
  const [count, setCount] = useState<number>(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('loading')

  const fetchData = () => {
    setStatus('loading')

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5

      if (isSuccess) {
        setStatus('idle')
        console.log('Data loaded successfully.')
      } else {
        setStatus('error')
        console.log('Data loading failed.')
      }
    }, 2000)
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      <h3>Status State</h3>

      {status === 'loading' && (
        <p style={{ color: 'blue', fontWeight: 'bold' }}>
          Loading data... Please wait.
        </p>
      )}

      {status === 'idle' && (
        <p style={{ color: 'green' }}>Status: **Idle (Ready)**.</p>
      )}

      {status === 'error' && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          Status: **Error**. Failed to fetch data.
        </p>
      )}

      <button onClick={fetchData} disabled={status === 'loading'}>
        {status === 'loading' ? 'Fetching...' : 'Start Data Fetch'}
      </button>
    </div>
  )
}
console.log(useStateHook);

