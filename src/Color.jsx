import { useState } from "react"; 

// color componenets
function Color() {
    const [color ,setColor] = useState('red');


    return (
        <div>
            <h1 style={{color:color}}>This is Current color : {color}</h1>
            <button style={{ color:"green" }} onClick={()=>{setColor('green')}}> set color Green</button>
            <button style={{ color:"red" }} onClick={()=>{setColor('red')}}> set color Red</button>


        </div>
  
    )
  }

  export default Color;