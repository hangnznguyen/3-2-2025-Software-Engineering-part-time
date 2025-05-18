import { useEffect } from "react";

function MyComponent() {

  useEffect(() => {
    console.log("use effect called");
  }, []); // ✅ Empty dependency array means this effect runs once on mount

  return (
    <>
      <div>
        <p>My Component loaded</p>
      </div>
    </>
  );
}

export default MyComponent;