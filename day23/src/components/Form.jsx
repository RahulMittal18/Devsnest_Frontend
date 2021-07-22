import { useState } from "react";
import RenderDetail from "./RenderDetail";
// import useFetch from './useFetch';

export default function Form() {
  const [clicked, setClicked] = useState(false);
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    setClicked(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="input-box">
          <div className="input-title">
            <input
              required
              type="text"
              name="title"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
                setClicked(false);
              }}
              placeholder="Codeforces Username"
              autoComplete="off"
            />
          </div>
        </div>
        <button type="submit" className="btn-submit">
          Search
        </button>
      </form>

      {clicked ? <RenderDetail user={user} /> : ""}
    </div>
  );
}
