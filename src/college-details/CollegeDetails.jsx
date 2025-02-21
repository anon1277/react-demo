import { NavLink, Outlet } from "react-router";

const CollegeDetails = ()=>{
    return(
        <>
        <div style={{ textAlign:"center" }}>
            <h1>College Details </h1>
            <NavLink className="college-navlink" to="student">Students</NavLink>
            <NavLink className="college-navlink" to="department">Department</NavLink>
            <NavLink className="college-navlink" to="result">Result</NavLink>
            <NavLink className="college-navlink" to="college-data">College Data</NavLink>

            <Outlet/>
        </div>

        </>
    )
}
export default CollegeDetails;