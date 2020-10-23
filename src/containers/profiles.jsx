import React from "react";
import { Header } from "../components/components";
import { Profiles } from "../components/components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export default function SelectionProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="logo" src={logo}></Header.Logo>
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.User
          onClick={() => {
            setProfile = {
              displayName: user.displayName,
              photoURL: user.photoURL,
            };
          }}
        >
          <Profiles.Picture src={user.photoURL}></Profiles.Picture>
          <Profiles.Name>{user.displayName}</Profiles.Name>
        </Profiles.User>
      </Profiles>
    </>
  );
}
