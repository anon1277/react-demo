import { Link } from "react-router";

function Student({name="anon1277"}){

    return(
        <div>
  
            <h1> Student name: {name}</h1>      
            <Link to="/skills"> Skills  </Link>
            {/* <Link to="/college"> College  </Link> */}
        </div>
    );
}

export default Student;