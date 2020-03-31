import React, { useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router-dom";

//IMPORT PAGES TO APP.JS
import HomePage from "./pages/HomePage";
import CandidatesPage from "./pages/CandidatesPage";
import CandidatePage from "./pages/CandidatePage";
import CompanyPage from './pages/CompanyPage';


const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (user.isAuthenticated) return <Component {...props} />;
        return (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location
              }
            }}
          />
        );
      }}
    />
  );
};


function App() {
  const [user, setUser] = useState({ isAuthenticated: false });
  const FourOhFourPage = () => {
    return (
      <div>
        <h1>404 Not Found</h1>
      </div>
    );
  };
  


  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/company" exact component={CompanyPage} />
        <ProtectedRoute
          exact
          user={user}
          path="/candidates"
          component={CandidatesPage} />
        <ProtectedRoute
          user={user}
          path="/candidates/:id"
          component={CandidatePage} />
          <Route path="*" component={FourOhFourPage} />
      </Switch>
    </Router>
  );
}

export default App;
