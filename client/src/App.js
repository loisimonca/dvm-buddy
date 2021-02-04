import React, { useEffect } from "react";
import { Router, Route, Switch } from 'react-router'
import "./App.css";
import API from "./utils/API";
import Navbar from "./component/Navbar/Navbar";
import Login from "./component/Login/Login";
import CustomerAccount from "./component/CustomerAccount/CustomerAccount"
import CustomerPage from "./component/CustomerPage/CustomerPage"
function App() {
  //express server api route test (user info)
  //data from mongoDB will be displayed on the console
  useEffect(() => {
    API.getClassified()
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <Navbar />
      <Login />
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
