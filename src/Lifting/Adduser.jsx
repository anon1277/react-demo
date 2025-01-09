import { useState } from "react";

const Adduser = ({Setuser})=>{    
    return(
        <>
            <h1>
                Add user

                <input className="form-control mt-2 col-6" onChange={(event)=>Setuser(event.target.value)} placeholder="Enter User name" type="text" />
           
            </h1>
        </>
    )
}

export default Adduser;