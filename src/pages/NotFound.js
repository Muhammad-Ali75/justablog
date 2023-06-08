import { Link } from "react-router-dom";

function NotFounc() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <br />
      <h2>Page Not Found</h2>
      <br />
      <h3>Sorry. That Page is not found</h3>
      <br />
      <Link to="/" className="not-found-link">
        Go to Home Page...
      </Link>
    </div>
  );
}

export default NotFounc;
