import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> blog title</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create" style={{
                    color:"blue",
                    backgroundColor:"green",
                    borderRadius:'8px'
                }}>create</Link>
                <Link to="/">edit</Link>
                <Link to="/">delete</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;