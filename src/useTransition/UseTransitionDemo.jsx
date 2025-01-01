import React, { useState, useTransition } from "react";

const UseTransitionDemo = () => {
    // useTransition
    const [pending, startTransition] = useTransition();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("Click the button!");

    // Handle Button Onclick
    const handleOnClick = () => {
        setLoading(true); // Start loading immediately
        // Perform async logic outside startTransition
        new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
            // Start a transition to update state
            startTransition(() => {
                setMessage("Operation Complete!");
                setLoading(false); // Stop loading after update
            });
        });
    };

    return (
        <>
            <h1>Use useTransition Hook in React</h1>
            <p>{pending || loading ? <img style={{ width:"200px" }} src="https://media.tenor.com/wpSo-8CrXqUAAAAj/loading-loading-forever.gif"  alt="loading"/> : message}</p>
            <button
                disabled={pending || loading}
                className="btn btn-primary"
                onClick={handleOnClick}
            >
                Submit
            </button>
        </>
    );
};

export default UseTransitionDemo;
