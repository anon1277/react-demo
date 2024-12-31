import { useRef } from "react";
import UserInput from "./UserInput";

const ForwardRef = () => {
  // Declare refs
  const inputRef = useRef(); // Ref for the direct input field
  const forwardRef = useRef(); // Ref for the UserInput component using forwardRef

  // Handler to update and focus the direct input field using ref
  const handleRef = () => {
    if (inputRef.current) {
      inputRef.current.value = "Direct Ref Updated!"; // Set value for the input field
      inputRef.current.focus(); // Focus the input field
    }
  };

  // Handler to update and focus the UserInput component using forwardRef
  const handleForwardRef = () => {
    if (forwardRef.current) {
      forwardRef.current.value = "Forward Ref Updated!"; // Set value for the forwarded input
      forwardRef.current.focus(); // Focus the forwarded input
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Demo: Ref vs Forward Ref</h1>

      {/* Section for demonstrating forwardRef usage */}
      <div className="mb-4 m-2">
        <h2 className="text-center">Forward Ref Example</h2>
        {/* Input component using forwardRef */}
        <UserInput ref={forwardRef} />
        <button
          className="btn btn-primary mt-2"
          onClick={handleForwardRef}
        >
          Update Using Forward Ref
        </button>
      </div>

      {/* Section for demonstrating regular ref usage */}
      <div className="mb-4 m-2">
        <h2 className="text-center">Regular Ref Example</h2>
        {/* Input field with direct ref */}
        <input
          className="form-control mb-2"
          ref={inputRef}
          type="text"
          placeholder="Type something..."
        />
        <button
          className="btn btn-secondary"
          onClick={handleRef}
        >
          Update Using Regular Ref
        </button>
      </div>
    </div>
  );
};

export default ForwardRef;
