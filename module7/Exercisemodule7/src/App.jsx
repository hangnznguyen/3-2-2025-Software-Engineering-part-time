import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './EXERCISE4&5/Components/NavBar'
import AppRoutes from './AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <AppRoutes />
    </>
  )
}

export default App
