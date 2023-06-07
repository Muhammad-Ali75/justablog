import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  return (
    <div className="blog-detail">
      <h3>Blog Detail of {id}</h3>
    </div>
  );
}

export default BlogDetails;
