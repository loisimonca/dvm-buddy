import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import CustomerAccount from "./component/CustomerAccount/CustomerAccount";
import Login from "./component/Login/Login.jsx";
import Home from "./component/Home/Home";
import Boarding from "./component/Boarding/Boarding"
import CustomerPage from "./component/CustomerPage/customerPage";
import { UserContext } from "./utils/UserContext";

function App() {
  const [value, setValue] = useState(false);
  return (
    <>
      <Router>
        <div>
          <UserContext.Provider value={{ value, setValue }}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Boarding" component={Boarding} />
              <Route exact path="/CustomerPage" component={CustomerPage} />
              <Route
                exact
                path="/CustomerAccount"
                component={CustomerAccount}
              />
              <Route exact path="/Login" component={Login} />
              <Route path="*" render={() => <Redirect to="/" />} />
            </Switch>
          </UserContext.Provider>
        </div>
      </Router>
    </>
  );
}

export default App;
