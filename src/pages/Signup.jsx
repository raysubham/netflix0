import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import { Form } from "../components/components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignup = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((user) =>
        user.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => history.push(ROUTES.BROWSE))
      )
      .catch((error) => {
        setFirstName("");
        setError(error.message);
        setEmailAddress("");
        setPassword("");
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Inner onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
              type="text"
            ></Form.Input>
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
            <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
          </Form.Inner>
          <Form.Text>
            Already a User?
            <Form.Link to="/signin"> Sign In Now </Form.Link>
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
