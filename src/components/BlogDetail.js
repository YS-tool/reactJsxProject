import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../useFetch";

export default function BlogDetail() {

    const {id} = useParams();
    const {blogs, pending, error} = useFetch("http://localhost:8000/blogs/" + id);
    const navigate = useNavigate();


    const handleDelete = ()=>{
        fetch("http://localhost:8000/blogs/"+blogs.id,{
            method:"DELETE"
        }).then(()=>{
            navigate("/");
        })

    }

    return (
    <div className="blog-details">
        {pending && <div> Loading... </div> }
        {error && <div> {error}</div>}
        {blogs && (
            <article>
                <h2>{blogs.title}</h2>
                <p>written by {blogs.author}</p>
                <div>{blogs.body}</div>
                <button className="blog-details" onClick={handleDelete}>delete</button>
            </article>
            
        )}
    </div>
    )
}
