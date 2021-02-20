import React from "react";
import { GoogleLogin } from "react-google-login";
// import { UserContext } from "../../utils/UserContext";
//Refresh token
import { refreshTokenSetup } from "../../utils/refreshToken";
import API from "../../utils/API";
// import {useHistory} from 'react-router-dom';

const clientId =
  "32479969633-uog46n0h5g22l1rps60k0cvbluuq3ni6.apps.googleusercontent.com";

function UserGoogleLogin() {
  // const {setValue, setToken, setUserId, setDomain} = useContext(UserContext);
  // const history = useHistory();
  const onSuccess = (res) => {
    // console.log("[Login Success] currentUser: ", res.profileObj );
    refreshTokenSetup(res);
    const userToken = res.tokenObj.id_token;
    //find user by email and check if it exist already
    API.getUserIdByEmail(res.profileObj.email).then((user) => {
      // console.log(user)
      if (user.data !== null) {
        sessionStorage.setItem("token", JSON.stringify(userToken));
        sessionStorage.setItem("type", JSON.stringify(user.data.userType));
        sessionStorage.setItem("userId", JSON.stringify(user.data._id));
        sessionStorage.setItem("name", JSON.stringify(user.data.firstName));
      } else {
        API.createGoogleFacebookUser({
          userImage: res.profileObj.imageUrl,
          domain: "Google",
          userType: "User",
          firstName: res.profileObj.givenName,
          lastName: res.profileObj.familyName,
          email: res.profileObj.email,
          password: "****",
        }).then((user) => {
          // console.log('after create user account: ', user)
          sessionStorage.setItem("token", JSON.stringify(userToken));
          sessionStorage.setItem("type", JSON.stringify(user.data.userType));
          sessionStorage.setItem("userId", JSON.stringify(user.data.userId));
          sessionStorage.setItem("name", JSON.stringify(user.data.name));
        });
      }
      window.location.replace("/UserHomePage");
    });
  };
  const onFailure = (res) => {
    console.log("[Login failed] res: ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <button
            className="google-login"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <i className="fab fa-google" aria-hidden="true"></i>Sign in with
            Google
          </button>
        )}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
      />
    </div>
  );
}

export default UserGoogleLogin;
