// MoodContext.js
import { createContext, useContext, useState } from "react";

// Create context
const MoodContext = createContext();

// Custom hook for easier use
export const useMood = () => useContext(MoodContext);

// Provider component
function MoodProvider({ children }) {
  const [mood, setMood] = useState("happy");

  const toggleMood = () => {
    setMood((prevMood) => (prevMood === "happy" ? "sad" : "happy"));
  };

  return (
    <MoodContext.Provider value={{ mood, toggleMood }}>
      {children}
    </MoodContext.Provider>
  );
}
export default MoodProvider;