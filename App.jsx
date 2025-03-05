import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Chai from './chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Chai/>
      <h1>Chai aur react</h1>
      <p>Test para</p>
    </>
    
  )
}

export default App
