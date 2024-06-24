import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {


  const {blogs, pending, error} = useFetch("http://localhost:8000/blogss")
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {pending && <div> loading </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
}
 
export default Home;