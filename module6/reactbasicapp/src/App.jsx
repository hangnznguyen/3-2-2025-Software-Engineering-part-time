import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from '../HelloWorld'
import GoodBye from '../goodbye'

function App() {
  
  return (
    <>
      <HelloWorld></HelloWorld>
      <div>
        <h1>Hello, this is my first react application</h1>
        </div>
        <button>click</button>
        <div>
          <h3>Footer of my webpage</h3>
        </div>
        <GoodBye></GoodBye>
       </>
  )
}
export default App
