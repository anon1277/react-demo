import React from "react";
import { useState } from "react";

function MultipleCondtion(){

    const [count , Setcount] = useState(0);

    return(
        <div>
            <h1>Multiple Condition</h1>
            <h1>{count}</h1>
            {
            count==0 ? <h1>Condition 0</h1>

            :count==1 ? <h1>Condition 0</h1>
            :count==2 ? <h1>Condition 2</h1>
            
            :count==3 ? <h1>Condition 3</h1>

            :count==4 ? <h1>Condition 4</h1>

            :count==5 ? <h1>Condition 5</h1>

            :count==6 ? <h1>Condition 6</h1>

            : <h1>Other Condtion</h1>
            
            }
            <button onClick={()=>Setcount(count+1)}>Update Count </button>
        </div>
    )
}

export default MultipleCondtion;