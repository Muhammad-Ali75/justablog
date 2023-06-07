import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
