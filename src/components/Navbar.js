const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> blog title</h1>
            <div className="links">
                <a href="/">home</a>
                <a href="/" style={{
                    color:"blue",
                    backgroundColor:"green",
                    borderRadius:'8px'
                }}>create</a>
                <a href="/">edit</a>
                <a href="/">delete</a>
            </div>
        </nav>
     );
}
 
export default Navbar;