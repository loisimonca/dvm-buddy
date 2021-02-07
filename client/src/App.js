import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import CustomerAccount from "./component/CustomerAccount/CustomerAccount";
import Login from "./component/Login/Login.jsx";
import Home from "./component/Home/Home";
import Boarding from "./component/Boarding/Boarding";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Boarding" component={Boarding} />
            <Route exact path="/CustomerAccount" component={CustomerAccount} />
            <Route exact path="/Login" component={Login} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
