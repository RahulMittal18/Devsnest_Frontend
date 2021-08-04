import React, {useContext} from 'react';
import Context from "../AuthContext";
import {Route, Redirect} from 'react-router-dom'
function Profile() {
  const logger = useContext(Context)
  return (
    <div className="container">
      <Route>
        <h1>Profile</h1>
        <p>
          {
            logger.loggedIn?"Welcome to your Profile":<Redirect to='/'/>
          }
        </p>
      </Route>
    </div>
  );
}

export default Profile;