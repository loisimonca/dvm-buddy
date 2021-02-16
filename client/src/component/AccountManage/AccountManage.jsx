import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import "./AccountManage.css";
import EmployeeAccountSelectBar from "./EmployeeAccountSelectBar";
import UserAccountSelectBar from "./UserAccountSelectBar";

function AccountManage() {
  const { value, token, userId } = useContext(UserContext);
  const [userIdFromContext, setUserIdFromContext] = useState();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (userId) {
      API.getUserById(userId).then((res) => {
        setUserData(res.data);
      });
    }
  }, []);

  return (
    <div>
      {userData.userType === "Employee" && (
        <EmployeeAccountSelectBar
          userType={value}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {userData.userType === "User" && (
        <UserAccountSelectBar
          userType={value}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </div>
  );
}

export default AccountManage;
