import { useState } from 'react'
import Index from './router/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Index/>
    </>
  )
}

export default App
