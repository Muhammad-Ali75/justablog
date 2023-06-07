import { useState } from "react";

function CreateBlog() {
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
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form>
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
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
