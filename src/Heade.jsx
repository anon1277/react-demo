import { Link } from "react-router-dom"; // Correct import

function Header() {
    return (
        <>
            <div className="header">
                <div className="header-logo">
                    <Link to="/"> Logo </Link>  {/* Correct usage */}
                </div>
                <div>
                    <ul className="header-ul">
                        <li className="header-li">
                            <Link className="header-link" to="/">Home</Link> 
                        </li>

                        <li className="header-li">
                            <Link  className="header-link"to="/login">Login</Link> 
                        </li>

                        <li className="header-li">
                            <Link className="header-link" to="/about">About</Link> 
                        </li>

                        <li className="header-li">
                            <Link className="header-link" to="/college-details">College</Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
