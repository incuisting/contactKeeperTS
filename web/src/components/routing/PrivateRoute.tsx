import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

interface IPrivateRouteProps {
  component: any;
}
const PrivateRoute = (props: any) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props: any) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
