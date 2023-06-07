import { Link } from "react-router-dom";

function BlogList({ blogs, title }) {
  return (
    <div className="blog-list">
      <h2 className="title">{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/detail/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
