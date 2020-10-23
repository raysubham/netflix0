import React from "react";
import { Header } from "../components/components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="logo" src={logo}></Header.Logo>
        <Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
