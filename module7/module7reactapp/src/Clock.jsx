import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => tick(), 1000); // ✅ save the interval ID
    console.log('Clock component mounted');

    return () => {
      console.log('Clock component unmounted');
      clearInterval(clockInterval); // ✅ clear the correct interval
    };
  }, []);

  const tick = () => {
    setDate(new Date());
    console.log("tick");
  };

  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}

export default Clock;