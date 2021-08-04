import React, {useContext} from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";
import Context from "../AuthContext";


function Dashboard(props) {
  const logger = useContext(Context)
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <Route>
        <p>{
          logger.loggedIn?"Welcome to Dashboard": <Redirect to='/'/>
        }
        </p>
      </Route>
    </div>
  );
}

export default Dashboard;