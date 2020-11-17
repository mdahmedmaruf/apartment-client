import React, { useContext } from 'react';
import jwt_decode from "jwt-decode";
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';
const PrivateRoute = ({children, ...rest }) => {
     
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    return (
        <Route
        {...rest}
       render={({ location }) =>
         (loggedInUser.email||isLoggedIn())? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;

/*

    const token = sessionStorage.getItem('token');
    if(token) {
      const decodedToken = jwt_decode(token);
      
      loginUser.currentName = decodedToken.name;
      loginUser.currentEmail = decodedToken.email;
      loginUser.currentPhotoUrl = decodedToken.picture;
      setLoginUser(loginUser);

    }
    */