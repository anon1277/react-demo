import { useEffect, useState } from "react";

const CallOnceExample = () => {
    // State variables for count and data
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);

    // useEffect that runs only once when the component mounts
    useEffect(() => {
        callOnceFunction();
    }, []); // Empty dependency array ensures this runs only once on mount

    // useEffect that runs when the 'count' state changes
    useEffect(() => {
        callWhenCountUpdates();
    }, [count]); // This runs whenever the 'count' state updates

    // useEffect that runs when both 'count' or 'data' changes (multiple dependencies)
    useEffect(() => {
        console.log("Either count or data has been updated");
    }, [count, data]); // Runs when either count or data changes

    // useEffect that runs every time the component renders (no dependency array)
    useEffect(() => {
        console.log("Component rendered or state updated");
    }); // Runs on every render

    // useEffect with cleanup function (componentWillUnmount)
    useEffect(() => {
        console.log("Component mounted or updated");

        // Cleanup function to run on unmount
        return () => {
            console.log("Cleanup on unmount or before next effect");
        };
    }, []); // Empty array to ensure the effect only runs once, but it cleans up on unmount

    // Function to be called once when the component mounts
    function callOnceFunction() {
        console.log("This function is called only once when the component mounts");
    }

    // Function to log the updated count value when it changes
    function callWhenCountUpdates() {
        console.log("Updated count value:", count);
    }

    return (
        <div style={{ background: 'white', color: 'green', padding: '20px' }}>
            <hr style={{ borderColor: 'green', borderWidth: '2px' }} />
            <h1>useEffect Example</h1>
            <h1>Counter: {count}</h1>
            <h1>Data: {data}</h1>

            {/* Buttons to update the count and data state */}
            <button onClick={() => setCount(count + 1)}>Update Counter</button>
            <button onClick={() => setData(data + 1)}>Update Data</button>
            <hr style={{ borderColor: 'green', borderWidth: '2px' }} />
        </div>
    );
}

export default CallOnceExample;
