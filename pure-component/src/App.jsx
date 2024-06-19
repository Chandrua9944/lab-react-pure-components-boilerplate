import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PureCounter from './components/PureComponents'
import SimpleCounter from './components/SimpleComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <PureCounter/>
   <SimpleCounter/>
   </>
    
  )
}

export default App
