import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyComponent from './MyComponent'
import './App.css'
import ClockDisplay from './ClockDisplay'
import ActivityFinder from './ActivityFinder'
import Clock from './Clock'
import ReducerCounter from './ReducerCounter'
import BitcoinRates from './EXERCISE1/BitcoinRates'
import RefCounter from './RefCounter'
import VideoPlayer from './VideoPlayer'
import SubscribeForm from './SubcribeForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BitcoinRates></BitcoinRates>
      <MyComponent></MyComponent>
      <ClockDisplay></ClockDisplay>
      <ActivityFinder>  </ActivityFinder>
   <RefCounter></RefCounter>
      <ReducerCounter></ReducerCounter>
      <VideoPlayer></VideoPlayer>
      <SubscribeForm></SubscribeForm>
      <
     
    </>
  )
}

export default App
