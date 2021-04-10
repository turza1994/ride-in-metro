import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Destination from "./components/Destination/Destination";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/destination/:type">
              <Destination />
            </PrivateRoute>
            <PrivateRoute path="/destination">
              <Destination />
            </PrivateRoute>
            
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
