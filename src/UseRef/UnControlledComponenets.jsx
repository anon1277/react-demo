import { useRef } from "react";

const UnControlledComponenets = ()=>{

    const UserRef = useRef(); 
    const Passref= useRef(); 

    // HandleFormSubmit
    const HandleFormSubmit = (event)=>{
        event.preventDefault();
        // uesrname
        const username = document.querySelector("#username").value;
        // password
        const password = document.querySelector("#password").value;

        console.log("user :",username ,"password", password );
        
    }

    const HandleFormSubmitRef = (event)=>{
        event.preventDefault();
        const UserName = UserRef.current.value;
        const PassWord = Passref.current.value;       
        console.log("UserRef :",UserRef ,"password", PassWord );

    }

    return(
        <div>
            <div>
                <h1>UnControlled Componenet Example</h1>
                <form action=""  method="post" onSubmit={HandleFormSubmit}>
                        <input type="text" name="username" className="form-control" placeholder="Enter user name" id="username_ref" />
                        <br /><br />
                        <input  type="password" className="form-control"name="password" placeholder="Enter password" id="password_ref" />
                        <br />
                        <button className="mt-3 btn btn-primary" >Submit</button>

                </form>
            </div>

            <div>
                <h1>UnControlled Componenet With useRef </h1>
                <form action=""  method="post" onSubmit={HandleFormSubmitRef}>
                        <input type="text" ref={UserRef} name="username" className="form-control" placeholder="Enter user name" id="username" />
                        <br /><br />
                        <input  type="password" ref={Passref} className="form-control"name="password" placeholder="Enter password" id="password" />
                        <br />
                        <button className="mt-3 btn btn-primary" >Submit Ref</button>

                </form>
            </div>
          
        </div>
    )
}

export default UnControlledComponenets;