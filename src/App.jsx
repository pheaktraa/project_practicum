import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <h1 className="text-3xl font-bold text-purple-500">
        purple

      </h1>
      <h3 className='text-red-900'>chajkhdsfhasf</h3>

      <h1 className="text-blue-600 text-3xl font-bold">blue</h1>
      <h1 className='text-orange-400'>fhajhfadsf</h1>
      <h1 className='text-green-500 text-3xl font-bold'>green</h1>
    </>
  )
}

export default App
