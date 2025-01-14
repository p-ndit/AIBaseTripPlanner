import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import Hero from './components/custom/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Hero */}
      <Hero />
    </>
  )
}

export default App
