const name="anon1277"
const User = {
    name:"anon1277",
    email:"anon1277@gmail.com",
}

//profile components
export function Profile(){
    return(
        <div>
            <h1> name : {name?name:"user not found"}</h1>
            <h1> Email : {User.email?User.email:"email not available"}</h1>

        </div>

    )
}
// login componenets
export function Userlogin()
{
    return(
        <h1>User Login page</h1>
    )
}
//setting componets
export function Setting(){
    return(
        <h1>Setting page</h1>
    )
}

export default Userlogin;