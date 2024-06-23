import { useEffect, useState } from "react";

const useFetch = (url)=>{

    const [blogs, setBlogs] = useState(null)
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog=>blog.id!==id)
        setBlogs(newBlogs)
      }

    useEffect(()=>{
        setTimeout(() => {
          fetch(url)
          .then(res=>{
            if(!res.ok){
              throw Error("res not ok")
            }
            console.log(res)
            return res.json()
          })
          .then((data)=>{
            console.log("use effect called")
            setTimeout(() => {
              console.log("inside settimeout")
              setBlogs(data)
              setPending(false)
              setError(null)
            }, 500);
          })
          .catch(err=>{
            setPending(false)
            setError(err.message)
          })
        }, 1000);
      },[])

      return {blogs, pending, error}
    
}

export default useFetch