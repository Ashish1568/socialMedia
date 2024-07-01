import { useState } from 'react'
import './App.css'
import SocialApp from './components/SocialApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <SocialApp></SocialApp>
        
    </>
  )
}

export default App
