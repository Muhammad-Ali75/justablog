import BlogList from "../components/Blog/BlogList";
import useFetch from "../hooks/useFetch";

function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:5000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Posts"} />}
    </div>
  );
}

export default Home;
