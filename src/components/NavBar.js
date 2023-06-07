import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Just A Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
            padding: "11px",
          }}
        >
          Create Blog
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
