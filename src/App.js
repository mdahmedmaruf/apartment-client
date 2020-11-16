import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
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
            <Route path="/apartment/:id" component={Apartment} />
            <Route path="/login" component={Login} />
          </Switch>
        </main>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
