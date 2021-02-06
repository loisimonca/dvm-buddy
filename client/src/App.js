import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import CustomerAccount from "./component/CustomerAccount/CustomerAccount";
import AdminLogin from "./component/Login/AdminLogin";
import UserLogin from "./component/Login/UserLogin";
// import CustomerPage from "./component/CustomerPage/CustomerPage";
import Home from "./containers/Home/Home";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          {/* <Login /> */}
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/CustomerAccount" component={CustomerAccount} />
            <Route exact path="/UserLogin" component={UserLogin} />
            <Route exact path="/AdminLogin" component={AdminLogin} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
