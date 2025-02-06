import { useId } from "react";

const UseidDeom = ()=>{

    const name = useId(); 
    return(
        <>
        <hr />
        <h1>Use ID Demo</h1>
        <h4>Form 1</h4>
        <Form />
        <h4>Form 2</h4>

        <Form />
        <h4>Form 3</h4>

        <Form />
        </>
    )
}


const Form = () => {
    const nameId = useId();
    const emailId = useId();
  
    return (
      <form>
        <div>
          <label htmlFor={nameId}>Name:</label>
          <input type="text" id={nameId} />
        </div>
        <div>
          <label htmlFor={emailId}>Email:</label>
          <input type="email" id={emailId} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
export default UseidDeom;