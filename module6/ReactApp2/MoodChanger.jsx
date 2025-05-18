import React, { useState } from 'react';

function MoodChanger() {
  const [mood, setMood] = useState('happy');
  const [count, setCount] = useState(0);

  const handleWinLotto = () => {
    setMood('ecstatic');
    console.log(mood); // note: will still log previous value due to async state update
  };

  const handleRunningLate = () => {
    let newMood = 'stressed';
    if (mood === 'stressed') newMood = 'really stressed';
    else if (mood === 'really stressed') newMood = 'giving up';
    setMood(newMood);
  };

  const handleCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className="MoodChanger componentBox">
      <div>
        Current Mood: {mood}
      </div>
      <div>
        Counter value: {count}
      </div>
      <div>
        <button onClick={() => setMood('sad')}>Change Mood 1</button>
        <button onClick={() => setMood('tired')}>Change Mood 2</button>
        <button onClick={handleRunningLate}>Running Late</button>
        <button onClick={handleWinLotto}>Win Lotto</button>
        <button onClick={handleCounter}>Counter</button>
      </div>
    </div>
  );
}

export default MoodChanger;