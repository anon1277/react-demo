import { useState, useEffect } from "react";

const Clock = ({ color }) => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString()); // Update time
    }, 1000); // Update every second

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      <h1 style={{ color: color }}>Time: {currentTime}</h1>
    </div>
  );
};

export default Clock;
