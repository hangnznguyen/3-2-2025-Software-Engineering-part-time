import { useState } from 'react';

// Images
// Components
import MyComponent from './MyComponent';
import ClockDisplay from './ClockDisplay';
import ActivityFinder from './ActivityFinder';
import Clock from './Clock';
import ReducerCounter from './ReducerCounter';
import BitcoinRates from './EXERCISE1&2/BitcoinRates';
import RefCounter from './RefCounter';
import VideoPlayer from './VideoPlayer';
import SubscribeForm from './SubcribeForm';
import Emoji1 from './EXERCISE3/Emoji1';
import MoodProvider from './EXERCISE3/MoodProvider';


// Context Providers
import UserProvider from './UserContextProvider';
import MyThemeProvider from './MythemeContext';

// CSS
import './App.css';

function App() {
  const [count, setCount] = useState(0); // Currently unused, you can remove this if unnecessary

  return (
    <>
      <MyThemeProvider>
        <UserProvider>
          <SubscribeForm />
          <ClockDisplay />
          <ActivityFinder />
        </UserProvider>
      </MyThemeProvider>

      <RefCounter />
      <ReducerCounter />
      <VideoPlayer />
      <MyComponent />
      <BitcoinRates />
      <MoodProvider>
        <Emoji1 />
      </MoodProvider>
      




      {/* Optionally include Clock component here if needed */}
      {/* <Clock /> */}
    </>
  );
}

export default App;