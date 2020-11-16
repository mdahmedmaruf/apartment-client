import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Apartment from "./pages/Apartment";
import Home from "./pages/Home";
import "./sass/App.scss";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/apartment/:id" component={Apartment} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
