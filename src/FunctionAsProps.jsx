const FunctionAsProps = ({displUsernameName ,name ,GetUserName})=>{

    return(
        <div>
            <button className="mt-2 m-2 btn btn-primary" onClick={() => displUsernameName(name)}>
                  Display User name
            </button> 

             <button className="mt-2 m-2 btn btn-primary" onClick={GetUserName}>
                  Get User name
            </button>       
       </div>
    )
}
export default FunctionAsProps;