import { Link } from "react-router-dom";

export default function InterviewIndex(){
    return(
        <>
            <Link to="/interview1">Fruit list search</Link>
            <br/>
            <Link to="/interview2">Debounce hook</Link>
            <br/>
            <Link to="/interview3">parse phone number</Link>
        </>
    )

}