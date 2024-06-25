import { useParams } from "react-router-dom"
import useFetch from "../useFetch";

export default function BlogDetail() {

    const {id} = useParams();
    const {blogs, pending, error} = useFetch("http://localhost:8000/blogs/" + id);

    return (
    <div className="blog-details">
        {pending && <div> Loading... </div> }
        {error && <div> {error}</div>}
        {blogs && (
            <article>
                <h2>{blogs.title}</h2>
                <p>written by {blogs.author}</p>
                <div>{blogs.body}</div>
            </article>
        )}
    </div>
    )
}
