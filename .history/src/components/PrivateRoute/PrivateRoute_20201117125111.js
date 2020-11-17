import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const isLoggedIn = () =>{
        const token = sessionStorage.getItem('token');
        if(!token){
         return false;
       }
       const decodedToken = jwt_decode(token);
       
       const currentTime = new Date().getTime() / 1000;
 
       return (decodedToken.exp > currentTime);
     }
    
     const token = sessionStorage.getItem('token');
     if(token){
          const decodedToken = jwt_decode(token);
          loggedInUser.currentName = decodedToken.name;
          loggedInUser.currentEmail = decodedToken.email;
          loggedInUser.currentPhotoUrl = decodedToken.picture;
          setLoginUser(loggedInUser);
     }
    
     console.log(loggedInUser)


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