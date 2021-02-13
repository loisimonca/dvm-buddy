import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import UserAccount from "./component/CustomerAccount/UserAccount";
import Login from "./component/Login/Login.jsx";
import Home from "./component/Home/Home";
import ScheduleApptPage from "./component/AppointmentPage/AppointmentPage";
import AdminPetServices from "./component/AdminPetServices/AdminPetServices";
import AccountManage from "./component/AccountManage/AccountManage";
import CustomerPage from "./component/CustomerPage/CustomerPage";
import AdminPage from "./component/AdminPage/Admin";
import AdminHomePage from "./component/AdminHomePage/AdminHomePage";
import UserHomePage from "./component/UserHomePage/UserHomePage";
import { UserContext } from "./utils/UserContext";
import PetServices from "./component/PetServices/PetServices";

// import AdminPage from "./component/AdminPage /Admin";

function App() {
  const [token, setToken] = useState(null);
  const [value, setValue] = useState(null);
  const [userId, setUserId] = useState(null);
  const [domain, setDomain] = useState(null);
  return (
    <>
      <Router>
        <div>
          <UserContext.Provider
            value={{
              value,
              setValue,
              token,
              setToken,
              userId,
              setUserId,
              domain,
              setDomain,
            }}
          >
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/CustomerPage" component={CustomerPage} />
              <Route exact path="/PetServices" component={PetServices} />
              <Route exact path="/Appointments" component={ScheduleApptPage} />
              <Route exact path="/UserAccount" component={UserAccount} />
              <Route
                exact
                path="/AdminPetServices"
                component={AdminPetServices}
              />
              <Route exact path="/AccountManage" component={AccountManage} />
              <Route exact path="/AdminPage" component={AdminPage} />
              <Route exact path="/AdminHomePage" component={AdminHomePage} />
              <Route exact path="/UserHomePage" component={UserHomePage} />
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
