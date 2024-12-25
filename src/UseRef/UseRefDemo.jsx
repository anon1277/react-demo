import { useRef, useState } from "react";

const UserefDemo = () => {
    const countRef = useRef(0); // Mutable value
    const [renderedCount, setRenderedCount] = useState(0); // State to trigger re-render

    const increment = () => {
        countRef.current += 1; // Update mutable value
        console.log(`Mutable count: ${countRef.current}`);
    };

    const showCount = () => {
        setRenderedCount(countRef.current); // Trigger re-render to display the latest count
    };

    const inputRef = useRef(null);

    const handleFocus = () => {
        // Access the input element using the ref
        inputRef.current.focus();
    };

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={showCount}>Show Count</button>
            <p>Mutable Count (via ref): {countRef.current}</p>
            <p>Rendered Count (via state): {renderedCount}</p>

            <div>
                <input type="text" ref={inputRef} placeholder="Click the button to focus" />
                <button onClick={handleFocus}>Focus the Input</button>
            </div>
        </div>
    );
}
export default UserefDemo;