import { useState, useEffect } from "react";

function ActivityFinder() {
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState("");

  useEffect(() => {
    let ignore = false; // Flag to ignore late responses

    fetch("https://bored.api.lewagon.com/api/activity?participants=" + participants)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setActivity(json.activity);
        }
      });

    return () => {
      console.log('cleanup effect');
      ignore = true; // Will ignore setting state if component unmounted
    };
  }, [participants]);

  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(Number(e.target.value))} // Convert to number
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity:</strong> {activity}
      </div>
    </div>
  );
}

export default ActivityFinder;