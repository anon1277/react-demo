import { useState } from "react";

const useToogle = (defaultval)=>{

    const [value ,setValue] = useState(defaultval);
    
    const toogleValue =(val)=>{
        if(typeof val!='boolean')
        {
            setValue(!value);
        }
        else{
            setValue(val)
        }
        
    }
    return[value,toogleValue];
}
export default useToogle;