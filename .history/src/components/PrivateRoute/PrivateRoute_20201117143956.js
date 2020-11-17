import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';
import jwt_decode from "jwt-decode";
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
           setLoggedInUser(loggedInUser);
       }
       
       useEffect(()=>{
        fetch('http://localhost:5000/check-admin',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({email:(loggedInUser.email||loggedInUser.currentEmail)})
        }).then(response => response.json())
        .then(data => sessionStorage.setItem('isAdmin',data));
    },[])


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