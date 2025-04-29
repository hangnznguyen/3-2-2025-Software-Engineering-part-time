import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from '../HelloWorld'
import GoodBye from '../goodbye'
import Books from '../book'
import Greeting from '../EXEERCISE/Greeting'
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
        <Books name="educational"></Books>
        <Greeting name="John">Welcome to our website</Greeting>
        <Greeting>Have a nice day</Greeting>
       </>
  )
}
export default App
