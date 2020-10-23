import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import { Form } from "../components/components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignin = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setError(error.message);
        setEmailAddress("");
        setPassword("");
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Inner onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              type="email"
            ></Form.Input>
            <Form.Input
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
              autoComplete="off"
            ></Form.Input>
            <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
          </Form.Inner>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign Up Now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <Form.Link to="#">Learn More</Form.Link>
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
