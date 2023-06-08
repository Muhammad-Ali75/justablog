import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

function CreateBlog() {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [blogData, setBlogData] = useState({
    title: "",
    body: "",
    author: "mario",
  });
  function changeBlogData({ key, value }) {
    setBlogData((prevState) => {
      return { ...prevState, [key]: value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsPending(true);
    setTimeout(() => {
      fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      }).then(() => {
        setIsPending(false);
        // history.go(-1);
        navigate("/");
        console.log("POSTed");
      });
    }, 1000);
  }
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={blogData.title}
          onChange={(e) =>
            changeBlogData({ key: "title", value: e.target.value })
          }
        />
        <label>Blog body:</label>
        <textarea
          required
          value={blogData.body}
          onChange={(e) =>
            changeBlogData({ key: "body", value: e.target.value })
          }
        >
          {" "}
        </textarea>
        <label>Blog author:</label>
        <select
          value={blogData.author}
          onChange={(e) =>
            changeBlogData({ key: "author", value: e.target.value })
          }
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && (
          <div className="loader">
            <BallTriangle
              height={25}
              width={25}
              radius={5}
              color="White"
              ariaLabel="ball-triangle-loading"
              visible={true}
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateBlog;
