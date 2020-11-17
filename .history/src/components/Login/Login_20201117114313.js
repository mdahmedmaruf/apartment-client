import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import googleimage from "../../images/google-icon.png";
import logo from "../../images/Logo.png";
import firebaseConfig from "./firebaselogin.config";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoggedInUser(signedInUser);
        storeUserToken();
        history.replace(from);
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeUserToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        sessionStorage.setItem("token", idToken);
      })
      .catch(() => {});
  };
  return (
    <Container>
      <Row>
        <Col>
          <div className="login-logo my-5">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="google-login-button">
            <h4>Login With</h4>
            <button onClick={handleGoogleSignIn} className="login-button">
              <span>
                <img className="img-fluid" src={googleimage} alt="" />
              </span>
              Continue with Google
            </button>
            <p className="no-account-text text-center mt-3">
              Don't have an account?
              <span
                onClick={() => window.open("https://rb.gy/eibnw4", "_blank")}
                className="create-account-link text-primary"
              >
                Create an account
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
