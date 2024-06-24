import { useEffect, useState } from "react";

const useFetch = (url)=>{

    const [blogs, setBlogs] = useState(null)
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    // const handleDelete = (id)=>{
    //     const newBlogs = blogs.filter(blog=>blog.id!==id)
    //     setBlogs(newBlogs)
    //   }

    useEffect(()=>{

      const abortCtrl = new AbortController();
        setTimeout(() => {
          fetch(url, {signal:abortCtrl.signal})
          .then(res=>{
            if(!res.ok){
              throw Error("res not ok")
            }
            return res.json()
          })
          .then((data)=>{
            // setTimeout(() => {
              setBlogs(data)
              setPending(false)
              setError(null)
            // }, 500);
          })
          .catch(err=>{
            if (err.name==="AbortError"){
              console.log("abort error" + err.name)
            }else{
              setPending(false)
              setError(err.message)
            }
          })
        }, 2000);

        return ()=>abortCtrl.abort();
      },[])

      return {blogs, pending, error}
    
}

export default useFetch