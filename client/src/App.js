import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import CustomerAccount from "./component/CustomerAccount/CustomerAccount";
import Login from "./component/Login/Login";
import CustomerPage from "./component/CustomerPage/CustomerPage";
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
          </Switch>
        </div>
      </Router>
    </>
  );
}


<Router>
    <div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={CustomerAccount}/>
            <Route path="/CustomerPage" component={CustomerPage} />                         
            <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
    </div>
</Router>


export default App;
