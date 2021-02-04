import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import CustomerAccount from "./component/CustomerAccount/CustomerAccount";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import CustomerPage from "./component/CustomerPage/CustomerPage"

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

<BrowserRouter>
    <div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={CustomerAccount}/>
            <Route path="/CustomerPage" component={CustomerPage} />                         
            <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
    </div>
</BrowserRouter>

export default App;
