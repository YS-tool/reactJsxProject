import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create=()=>{

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('mario');
    const[pending, setPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, body, author}
        setPending(true);
        setTimeout(() => {
            fetch("http://localhost:8000/blogs",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(blog)
            }).then(()=>{
                setPending(false)
                console.log("new blog added")
            })
        }, 2000);

        // navigate(-1)
        navigate("/")
        console.log(blog)
    }

    return (
        <div className="create">
            <h2>
                this is Create page 
            </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                ></input>

                <label>Blog body:</label>
                <textarea
                    value={body}
                    required
                    onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>


                <label>Blog author</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!pending && <button>add Blog</button>}
                {pending && <button disabled>Blog is adding...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
}

export default Create;