import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
// import { UserContext } from "../../utils/UserContext";
import API from "../../utils/API";

function UserFacebookLogin() {
  // const { setValue, setToken } = useContext(UserContext);
  // const history = useHistory();
  const [state, setState] = useState({
    isLoggedIn: false,
  });
  const responseFacebook = (response) => {
    // console.log(response);
    const token = response.accessToken;
    API.getUserIdByEmail(response.email).then((user) => {
      if (user.data) {
        setState({
          isLoggedIn: true,
        });
        sessionStorage.setItem("token", JSON.stringify(token));
        sessionStorage.setItem("type", JSON.stringify(user.data.userType));
        sessionStorage.setItem("userId", JSON.stringify(user.data._id));
        sessionStorage.setItem("name", JSON.stringify(user.data.firstName));
      } else {
        const fullName = response.name.split(" ");
        const firstName = fullName[0];
        const lastName = fullName[1];
        API.createGoogleFacebookUser({
          userImage: response.picture.data.url,
          domain: "Facebook",
          userType: "User",
          firstName: firstName,
          lastName: lastName,
          email: response.email,
          password: "****",
        }).then((user) => {
          setState({
            isLoggedIn: true,
          });
          // console.log('after create user account: ', user)
          sessionStorage.setItem("token", JSON.stringify(token));
          sessionStorage.setItem("type", JSON.stringify(user.data.userType));
          sessionStorage.setItem("userId", JSON.stringify(user.data.userId));
          sessionStorage.setItem("name", JSON.stringify(user.data.name));
        });
      }
    });
  };
  let fbContent;
  if (state.isLoggedIn) {
    window.location.replace("/UserHomePage");
    fbContent = (
      <div
        style={{
          width: "400px",
          margin: "auto",
          background: "#f4f4f4",
          padding: "20px",
        }}
      >
        <h2>Welcome {state.name} </h2>
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId="237379427969902"
        fields="name,email,picture"
        icon="fab fa-facebook"
        callback={responseFacebook}
      />
    );
  }
  return <div>{fbContent}</div>;
}

export default UserFacebookLogin;
