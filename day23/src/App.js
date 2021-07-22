import "./App.css";
// import useFetch from "./components/useFetch";
import Form from "./components/Form";
// import RenderDetail from "./components/RenderDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rating">Codeforces Rating</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/rating">
            <Rating />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>Home</h2>
      <img
        src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt="image"
      ></img>
    </>
  );
}

function Rating() {
  return (
    <>
      <Form />
    </>
  );
}

function About() {
  return (
    <>
      <h2>Author: Rahul</h2>
    </>
  );
}
