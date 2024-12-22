import { useEffect } from "react";

const PropWithUseEffect = ({ count, data }) => {

  // Function to handle changes in the counter
  const HandleCounter = () => {
    console.log("HandleCounter called");
  }

  // Function to handle changes in the DataWithProps
  const HandleData = () => {
    console.log("HandleData called when DataWithProps Updated");
  }

  // useEffect hook to handle the counter only once when the component mounts
  useEffect(() => {
    HandleCounter();
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // useEffect hook to handle DataWithProps whenever 'data' prop changes
  useEffect(() => {
    HandleData();
  }, [data]); // 'data' is the dependency, so this effect runs whenever 'data' prop changes

  // JSX rendering the count and data with a styled layout
  return (
    <div>        
      <h1>Counter: {count}</h1>
      <h1>DataWithProps: {data}</h1>
      <hr style={{ borderColor: 'green', borderWidth: '2px' }} />
    </div>
  );
}

export default PropWithUseEffect;
