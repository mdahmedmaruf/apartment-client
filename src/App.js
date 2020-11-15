import { Container } from "react-bootstrap";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./sass/App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Container>
          <h1>Welcome</h1>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
