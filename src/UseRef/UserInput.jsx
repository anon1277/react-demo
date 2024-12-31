// UserInput Component that forwards its ref
import { forwardRef } from "react";

const UserInput = (props, ref) => {
  return (
    <div>
      {/* Input field that receives ref via forwardRef */}
      <input
        type="text"
        className="form-control"
        placeholder="Forward Ref Input"
        ref={ref}
      />
    </div>
  );
};

// Exporting the component with forwardRef to pass the ref down
export default forwardRef(UserInput);
