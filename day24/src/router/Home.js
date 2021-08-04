import React, {useContext} from 'react';
import Context from "../AuthContext";

function Home(props) {
  const logger = useContext(Context)
//   const toggleLogin = () => {
//     logger.toggleLogin()
//   }
  return (
    <div className="container">
      <h1>Home</h1>
      <p>Login to access Profile and Dashboard</p>
      {
        logger.loading?"Loading...":
          <button onClick={logger.toggleLogin}>{logger.loggedIn ? "Logout" : "Login"}</button>
        //   logger.loggedIn?
        //     <button onClick={logger.logout}>Logout</button>:
        //     <button onClick={logger.login}>Login</button>
      }
    </div>
  );
}

export default Home;