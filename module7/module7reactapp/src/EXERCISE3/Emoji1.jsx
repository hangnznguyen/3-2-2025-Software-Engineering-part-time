
import { useMood } from "./MoodProvider";

function Emoji1() {
  const { mood, toggleMood } = useMood();

  const emoji = mood === "happy" ? "😊" : "😢";

  return (
    <div className="Emoji componentBox">
      <p>Current Mood: {emoji}</p>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}

export default Emoji1;