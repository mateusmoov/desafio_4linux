import { Context, AuthProvider } from "./Context/AuthContext";
import React, { useContext } from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import { Home, Login } from "./pages";
import history from "./history";
import "./App.css";

const CustomRoute = ({ isPrivate, ...rest }) => {
  const { loading, authenticated } = useContext(Context);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} />;
};

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <CustomRoute exact path="/login" component={Login} />
          <CustomRoute isPrivate exact path="/" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
