import React, {useContext} from 'react';
import Context from "../AuthContext";

function About() {
  const logger = useContext(Context)
  return (
    <div className="container">
      <h1>About</h1>
      <p>{logger.loggedIn? "You are logged in":"You are logged out"}</p>
    </div>
  );
}

export default About;