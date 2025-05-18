import { useState } from "react";

function Emoji() {
  const [mood, setMood] = useState('happy');

  const changeMood = () => {
    setMood((prevMood) => (prevMood === 'happy' ? 'sad' : 'happy'));
  };

  const emoji = mood === 'happy' ? '😊' : '😢';

  return (
    <div className="Emoji componentBox">
      <p>Current Mood: {emoji}</p>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;