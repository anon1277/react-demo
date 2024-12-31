import React, { useState } from "react";

const UseFormStatus = () => {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Set pending state to true
    setPending(true);

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Log form submission success
    console.log("Form submission done");

    // Reset pending state
    setPending(false);
  };

  const FormField = () => {
    return (
      <>
        {/* Name Input Field */}
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name:"
          name="name"
          id="name"
        />
        <br />
        <br />
        {/* Password Input Field */}
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password:"
          name="password"
          id="password"
        />
        <br />
        <br />
        {/* Submit Button */}
        <button type="submit" disabled={pending} className="btn btn-primary">
          {pending ? "Submitting..." : "Submit"}
        </button>
      </>
    );
  };

  return (
    <>
      <h1>Use Form Status Hook React</h1>
      {/* Use onSubmit for form submission */}
      <form onSubmit={handleSubmit}>
        <FormField />
      </form>
    </>
  );
};

export default UseFormStatus;
