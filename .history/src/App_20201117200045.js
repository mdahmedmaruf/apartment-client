import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddRent from "./components/Dashboard/AddRentHouse/AddRent";
import BookLists from "./components/Dashboard/BookLists/BookLists";
import Dashboard from "./components/Dashboard/DashboardCommon/Dashboard";
import MyRent from "./components/Dashboard/MyRent/MyRent";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ViewDetails from "./components/ViewDetails";
import Apartment from "./pages/Apartment";
import Home from "./pages/Home";
import "./sass/App.scss";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <PrivateRoute path="/apartment/:id">
               <Apartment></Apartment>
            </PrivateRoute>

             <PrivateRoute path='/view-details/:id'>
                <ViewDetails></ViewDetails>
             </PrivateRoute>

            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
            <Route path="/add-rent" component={AddRent} />
            <Route path="/my-rent" component={MyRent} />
            <Route path="/booking-list" component={BookLists} />
          </Switch>
        </main>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

//component={Apartment}


//https://immense-scrubland-81187.herokuapp.com/