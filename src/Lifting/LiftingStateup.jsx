import { useState } from "react";
import Adduser from "./Adduser"
import DisplayUser from "./DisplayUser";

const LiftingStateup = ()=>{


    const [user ,Setuser] = useState();
    console.log("user added" ,user);
    return(
        <>
            <h1>Lifting State demo</h1>

            <Adduser Setuser={Setuser}/>
            <hr />

            <DisplayUser user={user}/>
        </>
    )
}
export default LiftingStateup;