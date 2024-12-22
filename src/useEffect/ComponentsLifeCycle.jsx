import { useEffect, useState } from "react";

const ComponentsLifeCycle = () => {

  // State variables for count and display toggle
  const [count, setCount] = useState(0);  // Initial count value set to 0
  const [display, setDisplay] = useState(true);  // Toggle to show/hide count display

  // Mount phase: This effect runs once when the component mounts
  useEffect(() => {
    console.log("ComponentsLifeCycle Mounting Phase only");
  }, []); // Empty dependency array ensures it only runs once when the component is mounted

  // Update phase: This effect runs every time the 'count' state changes
  useEffect(() => {
    console.log("Update Phase", count);
  }, [count]); // 'count' is the dependency, so it runs whenever 'count' changes

  // Unmount phase: This effect will be triggered when the component unmounts
  useEffect(() => {
    return () => {
      console.log("Unmount Phase");
    };
  }, []); // Return cleanup function that will be called when the component is about to unmount

  // JSX for rendering the component
  return (
    <div>
      <hr style={{ borderColor: 'green', borderWidth: '2px' }} />
      <h1>ComponentsLifeCycle Example</h1>
      
      {/* Conditionally render the count and button based on the 'display' state */}
      {display ? (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Update Count</button>
        </div>
      ) : null}

      {/* Toggle display state to show/hide count */}
      <button onClick={() => setDisplay(!display)}>Display Toggle</button>
      
      <hr style={{ borderColor: 'green', borderWidth: '2px' }} />
    </div>
  );
}

export default ComponentsLifeCycle;
