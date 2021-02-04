import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import CustomerAccount from "./component/CustomerAccount/CustomerAccount";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Login />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/CustomerAccount" component={CustomerAccount} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
