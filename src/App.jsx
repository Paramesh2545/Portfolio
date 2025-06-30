import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import Portfolio from './portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Portfolio />
    </>
  )
}

export default App
