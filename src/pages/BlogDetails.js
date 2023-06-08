import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function BlogDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `http://localhost:5000/blogs/${id}`
  );

  function handleDelete() {
    fetch(`http://localhost:5000/blogs/${id}`, { method: "DELETE" }).then(() =>
      navigate("/")
    );
  }
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
