import { Link } from "react-router-dom";


const NotFound = () => {
    return ( 
        <div>
            <h2> 404 page, not found </h2>
            <Link to="/"> back to home page</Link>
        </div> 
    );
}
 
export default NotFound;