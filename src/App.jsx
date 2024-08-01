import { useState } from 'react'
import Calculator from './assets/Component/Calculator'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculator/>
    </>
  )
}

export default App
