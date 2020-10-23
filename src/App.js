import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages/Pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks/hooks";

export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
        <ProtectedRoute exact user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGNUP}
        >
          <Signup />
        </IsUserRedirect>
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGNIN}
        >
          <Signin />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
